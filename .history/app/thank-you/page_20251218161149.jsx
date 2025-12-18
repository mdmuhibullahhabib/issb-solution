"use client"
export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-green-600">
          ✅ Payment Successful
        </h1>
        <p className="text-gray-600">
          Thank you for your subscription. We will contact you soon.
        </p>
      </div>
    </div>
  );
}
