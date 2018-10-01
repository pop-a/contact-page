/*
* @Author: alexandru pop
* @Date:   2018-09-28 13:09:33
* @Last Modified by:   alexandru pop
* @Last Modified time: 2018-09-30 11:17:34
*/

const nodemailer = require('nodemailer')

module.exports = function(app, db) {
	app.post('/contact', (req, res) => {
		const senderInf = {
			name: req.body.name,
			email : req.body.email,
			message : req.body.message
		}
		
		db.collection('contact').insert(senderInf,(err, result) => {
			if(err)
				res.send({'error': 'We have a error here => '+ err})
			else
				res.send(result.ops[0])
		})

		//uncomment if you want to send email too
		// const mailOptions = {
  //           from: 'contact@test.com	',
  //           to: '',/*email address to send email*/ 
  //           subject: 'New message',
  //           html: 'New message from '+ req.body.name +' , <br><br>' + req.body.message + '<br><br> reply to '+ req.body.email
  //   	};

        // nodemailer.createTransport({
        //     host: 'smtp-mail.outlook.com',
        //     port: 587,
        //     secure: false,
        //     auth: {
        //         user: '', /*email adress for auth*/
        //         pass: '' /* password */
        //     }
        // }).sendMail(mailOptions, function(err, info) {
        //     if (err){ return err; }
        // });
    });
}