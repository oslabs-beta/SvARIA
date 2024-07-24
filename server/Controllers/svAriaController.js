import db from '../index.js';

const svAriaController = {};


// To add a new user 
svAriaController.addUser = (req, res, next) => {
    const {firstName, lastName, email} = req.query;
    const queryString = {
        text: 'INSERT INTO users (firstName, lastName, email) VALUES ($1, $2, $3)',
        values: [firstName, lastName, email]
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
    let {firstName, lastName, email} = req.query;

    if(!firstName){
        firstName = res.locals.user.firstname;
    }
    if(!lastName){
        lastName = res.locals.user.lastname;
    }
    if(!email){
        email = oldEmail;
    }
    const queryString = {
        text: 'UPDATE users SET firstName = $1, lastName = $2, email = $3 WHERE email = $4',  
        values:[firstName, lastName, email, oldEmail]
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