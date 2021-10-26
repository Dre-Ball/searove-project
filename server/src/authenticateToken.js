const admin = require('firebase-admin');
const serviceAccount = require(`./${process.env.FIREBASE_SERVICE}`);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const decodeIDToken = async (req, res, next) => {
    const header = req.headers.authorization;
    if (header !== 'Bearer null' && req.headers.authorization.startsWith('Bearer ')) {
        
        const idToken = req.headers.authorization.split('Bearer ')[1];
        console.log(idToken)

        try {
            const decodedToken = await admin.auth().verifyIdToken(idToken);
            req['currentUser'] = decodedToken;
        } catch (error) {
            console.error(error);
        }
    }

    next();
}

module.exports = decodeIDToken;