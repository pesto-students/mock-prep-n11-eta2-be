const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

module.exports = async (req, res) => { 
    if (!req.body) { res.status(400).send({message:"Input cannot be empty"})}

    const { token }  = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    const { name, email, picture } = ticket.getPayload();    
    const status = "success"

    res.status(201)
    res.json({name,email,picture,status})

}
