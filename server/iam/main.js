const service_key = process.env.ECE_IAM_CREDENTIALS

const admin = require('firebase-admin');
const app = admin.initializeApp({
    credential: admin.credential.cert(service_key)
});

const auth = app.auth()

console.log("App initialized")

async function createUser(name, email, password) {
    console.log("Creating User: "+name)
    try {
        const userRecord = await auth.createUser({
            email: email,
            password: password,
            displayName: name,
        });

        console.log('Successfully created new user:', userRecord);

    } catch (error) {
        console.error('Error creating new user:', error);
    }
}
  
createUser('Test', 'test@example.com', 'abc123');