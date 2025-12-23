"use server";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Bkash from "@/models/bkashToken";

/* ================= CREATE PAYMENT ================= */
export async function createPayment(bkashConfig, paymentDetails) {
  try {
    const { amount, callbackURL, orderID, reference } = paymentDetails;

    if (!amount || amount < 1) {
      return {
        statusCode: 2065,
        statusMessage: "Invalid amount",
      };
    }

    if (!callbackURL) {
      return {
        statusCode: 2065,
        statusMessage: "callbackURL required",
      };
    }

    const response = await axios.post(
      `${bkashConfig.base_url}/tokenized/checkout/create`,
      {
        mode: "0011",
        currency: "BDT",
        intent: "sale",
        amount,
        callbackURL,
        payerReference: reference || "1",
        merchantInvoiceNumber:
          orderID || "Inv_" + uuidv4().substring(0, 6),
      },
      {
        headers: await authHeaders(bkashConfig),
      }
    );

    return response?.data;
  } catch (error) {
    console.error("Create bKash Payment Error:", error);
    return null;
  }
}

/* ================= EXECUTE PAYMENT ================= */
export async function executePayment(bkashConfig, paymentID) {
  try {
    const response = await axios.post(
      `${bkashConfig.base_url}/tokenized/checkout/execute`,
      { paymentID },
      {
        headers: await authHeaders(bkashConfig),
      }
    );

    return response?.data;
  } catch (error) {
    console.error("Execute Payment Error:", error);
    return null;
  }
}

/* ================= AUTH HEADERS ================= */
const authHeaders = async (bkashConfig) => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    authorization: await grantToken(bkashConfig),
    "x-app-key": bkashConfig.app_key,
  };
};

/* ================= TOKEN LOGIC ================= */
const grantToken = async (bkashConfig) => {
  try {
    const tokenData = await Bkash.findOne({});

    // Token expired (1 hour)
    if (!tokenData || tokenData.updatedAt < new Date(Date.now() - 3600000)) {
      return await setToken(bkashConfig);
    }

    return tokenData.auth_token;
  } catch (error) {
    console.error("Grant Token Error:", error);
    return null;
  }
};

const setToken = async (bkashConfig) => {
  const response = await axios.post(
    `${bkashConfig.base_url}/tokenized/checkout/token/grant`,
    {
      app_key: bkashConfig.app_key,
      app_secret: bkashConfig.app_secret,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        username: bkashConfig.username,
        password: bkashConfig.password,
      },
    }
  );

  if (response?.data?.id_token) {
    const existingToken = await Bkash.findOne({});

    if (existingToken) {
      existingToken.auth_token = response.data.id_token;
      await existingToken.save();
    } else {
      await Bkash.create({
        auth_token: response.data.id_token,
      });
    }
  }

  return response?.data?.id_token;
};
