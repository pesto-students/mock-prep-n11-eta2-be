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
    // const user = await db.user.upsert({ 
    //     where: { email: email },
    //     update: { name, picture },
    //     create: { name, email, picture }
    // })
    // req.session.userId = user.id
    const status = "success"
    console.log({name,email,picture})
    res.status(201)
    res.json({name,email,picture,status})

}
