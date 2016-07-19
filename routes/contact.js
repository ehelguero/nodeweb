var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '*',
      pass: '*'
    }
  });

  var mailOptions = {
    from: 'John <john@gmail.com',
    to: 'e.helguero.c@gmail.com',
    subject: 'Website submission',
    text: 'Message from ' + req.body.name + '. Email: ' + req.body.email + '. Message: ' + req.body.message,
    html: '<p>You got a new email ' + req.body.name + '</p>'
  }

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.redirect('/');
    }else{
      console.log('Message was sent: ' + info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
