import db from '../index.js';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import {config} from 'dotenv';

config();

const svAriaController = {};

//Email confirmation
svAriaController.sendConfirm = (req, res, next) => {
    const confirmCode = uuidv4(); 
    const {first_Name, last_Name, email} = req.body;
    const queryString = {
        text: 'INSERT INTO email_confirm (first_Name, last_Name, email, confirmation_code) VALUES ($1, $2, $3, $4)',
        values: [first_Name, last_Name, email, confirmCode]
    };

    db.query(queryString)
        .then (data => {
            res.locals.message   = 'Data Entered into Confirm Table'
            return next();   
        })
        .catch(error => { 
            return console.log(`ERROR: ${error}`);
        });
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.Confirm_Email,
        pass: process.env.Confirm_Password,
      }
    });
    
    const mailOptions = {
      from: 'jewelclarkenyc@gmail.com',
      to: `${req.body.email}`,
      subject: 'Welcome to SvARIA! Please confirm your email.',
      html: `<h1>${req.body.content}</h1>
      <a href='http://localhost:3000/user/confirm?code=${confirmCode}'> Yes, It's me - send me ALL the stuff!</a>`
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error){
        console.log('error!')
      } else {
        console.log('email sent: ' + info.response)
      }
    })
    return next();
  }

// To check confirm email
svAriaController.checkConfirm = (req, res, next) => {
    db.query('SELECT * FROM email_confirm WHERE confirmation_code=$1', [req.query.code])
        .then(queryResult => {
            console.log('confirmation accepted')
            res.locals.allInfo = queryResult.rows[0];
            res.redirect('http://localhost:5173/');
            return next();
        })
        .catch(error => { 
                res.sendStatus(404);         
        });
};


// To add a new user 
svAriaController.addUser = (req, res, next) => {
    const {first_name, last_name, email} = res.locals.allInfo;
    const queryString = {
        text: 'INSERT INTO users (firstName, lastName, email) VALUES ($1, $2, $3)',
        values: [first_name, last_name, email]
    };

    db.query(queryString)
        .then (data => {
            res.locals.message   = 'New User Created'
            return next();   
        })
        .catch(error => { 
            return console.log(`ERROR: ${error}`);
        });
};

// To delete user info from temp confirm_email table
svAriaController.deleteFromTemp = (req, res, next) => {
    const {email} = res.locals.allInfo;
    db.query('DELETE FROM email_confirm WHERE email=$1', [email])
    .then(queryResult => {
        console.log('deletion confirmed')
        return next();
    })
    .catch(error => { 
            res.sendStatus(404);         
    });
};

// if user needs to locate acct to update 
svAriaController.getUser = (req, res, next) => {
      const email = req.params.email;
      const queryString = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [email]
    };
    
    db.query(queryString)
    .then(data => {
        res.locals.user = data.rows[0];
        return next();
    })
    .catch(error => { 
        return console.log(`ERROR: ${error}`);
    });
};

// if we need to pull users for email blast
svAriaController.getAllUsers = (req, res, next) => {
    const queryString = {
        text: 'SELECT * FROM users'
    };
    db.query(queryString)
    .then(data => {
        res.locals.allUsers = data.rows;
        return next();
    })
    .catch(error => { 
        return console.log(`ERROR: ${error}`);
    });  
};

// If we need to update a user
svAriaController.updateUser = (req, res, next) => {
    const oldEmail = req.params.email; 
    let {first_Name, last_Name, email_} = req.query;

    if(!first_Name){
        first_Name = res.locals.user.firstname;
    }
    if(!last_Name){
        last_Name = res.locals.user.lastname;
    }
    if(!email_){
        email_ = oldEmail;
    }
    const queryString = {
        text: 'UPDATE users SET firstName = $1, lastName = $2, email = $3 WHERE email = $4',  
        values:[first_Name, last_Name, email_, oldEmail]
    };
    
    db.query(queryString)
    .then(data => {
        res.locals.message = 'Update successful'
        return next();
    })
    .catch(error => { 
        return console.log(`ERROR: ${error}`);
    });  
};

//if we need to remove a user from db
svAriaController.deleteUser = (req, res, next) => {
    const email = req.params.email;
    const queryString = {
        text: 'DELETE FROM users WHERE email = $1',
        values: [email]
    };

    db.query(queryString)
    .then(data => {
        res.locals.message = 'Deletion successful'
        return next();
    })
    .catch(error => { 
        return console.log(`ERROR: ${error}`);
    });   
};

export default svAriaController;