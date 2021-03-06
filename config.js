//CONFIG OBJECT FOR SECRETS, PRIVATE KEYS ETC

module.exports = {
    'secretKey': process.env.SECRET_KEY,
    'mongoUrl' : process.env.MONGODB_URI,
    'facebook': {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL
    }
}
