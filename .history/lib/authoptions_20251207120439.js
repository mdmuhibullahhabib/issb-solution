export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = await loginUser(credentials);
                return user || null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account) {
                const { providerAccountId, provider } = account;
                const { email, image, name } = user;

                const userCollection = await dbConnect(collectionNamesobj.userCollection);

                const isExisted = await userCollection.findOne({ providerAccountId });

                if (!isExisted) {
                    const payload = { providerAccountId, provider, email, image, name };
                    await userCollection.insertOne(payload);
                }
            }
            return true;
        }
    }
};
