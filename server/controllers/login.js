const { OAuth2Client } = require('google-auth-library');
const dotenv = require('dotenv');
dotenv.config();



const handleLoginRequest = async (req, res) => {
    try {
        const redirectUrl = process.env.SERVER_URL + '/api/callback';
        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectUrl,
        );

        const authUrlOptions = {
            access_type: 'offline',
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email',
            ],
            prompt: 'consent',
        };

        const authorizeUrl = oAuth2Client.generateAuthUrl(authUrlOptions);
        return res.redirect(authorizeUrl);

    } catch (error) {
        console.error('Error in handling login request:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const callbackCheck = async (req, res) => {
    const code = req.query.code;

    try {
        const redirectUrl = process.env.SERVER_URL + '/api/callback';
        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectUrl,
        );

        // Exchange the authorization code for tokens
        const tokenResponse = await oAuth2Client.getToken(code);
        const userCredentials = tokenResponse.tokens;

        // Set user credentials in OAuth2 client
        oAuth2Client.setCredentials(userCredentials);

        // Access token
        const accessToken = userCredentials.id_token;
        // Refresh Token
        const refreshToken = userCredentials.refresh_token;

        console.log(accessToken);


        // Verify the ID token
        const ticket = await oAuth2Client.verifyIdToken({ idToken: accessToken, audience: process.env.CLIENT_ID });
        const payload = ticket.getPayload();

        console.log(payload);

        const sub_id = payload['sub'];
        const name = payload['name'];
        const email = payload['email'];
        const picture = payload['picture'];

        return res.redirect(process.env.SERVER_URL);

    } catch (err) {
        console.error('Error in callback check:', err);
        res.status(500).send('Error during authentication');
    }
};



module.exports = {
    handleLoginRequest,
    callbackCheck
}