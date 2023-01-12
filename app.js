const { response } = require('express')
const express = require ('express')
const nodemailer=require('nodemailer')
const app= express()
const port =5000

function sendEmail(){

    return new Promise((resolve , reject)=>{
        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'premachandranprince@gmail.com',
                pass:'yvdntzcjorvtnmve'
            }
        })
        const mail_config={
            from:'premachandranprince@gmail.com',
            to:'princepremc@gmail.com',
            subject:'Testing mail',
            text:'Just checking mails'
        }
        transporter.sendMail(mail_config, function(error,info){
            if(error){
                console.log(error)
                return reject({message:'An error has occured'})
            }
            return resolve({message:"Email sent"})
        })
    })
}
   app.get('/',(req,res)=>{
    sendEmail()
    .then(response=>res.send(response.message))
    .catch(error=>res.status(500).send(errir.message))
   })
 
app.listen(port, ()=>{
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
})