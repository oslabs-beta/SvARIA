// @ts-nocheck 
import express from 'express';
// import fs from 'fs';

import router from './routes/api.js';
import loadModel from "../src/chatbot/chatbot.js"
import cookieParser from 'cookie-parser';
import chatbotRoute from "../src/chatbot/chatbotRoute.js"

import cors from 'cors';

const app = express();
const PORT = 3000;
let ragChain

//chat_history[user1] = []
//chat_history[user2] = []
//if user1 -> chat_history[user_1].push(aiMsg)

app.use(express.json({
  type: ['application/json', 'text/plain']
}));

app.use(express.urlencoded({ extended: true }));
//app.use(handler);
app.use(cookieParser())


app.post("/chatbot", async (req, res) => {
  //console.log('req is', req)
  chatbotRoute(ragChain, req, res)
})

app.use('/user', router) ;

// app.get('/', (req, res, next) => {
//     // res.set('Content-Type', 'text/html'); 
//     res.set('Content-Type', 'text/html').readFile(__dirname + '/src/routes/+page.svelte', (err) => {
//         if(err) {
//             next(err, 'Get: / Middleware')
//         }
//         else{
//             console.log(`Server started successfully on port ${PORT}`)
//         }
//     });
// });

app.use(express.urlencoded({ extended: true }));
// app.use(handler);
app.use(cors());


app.use('/', router) ;

//404 error handling
app.use('*', (req, res) => res.status(404).send({message:'WELP! You\'ve been 404ed!'}));

//global error handling
app.use((err) => {
  class defaultErr {
    constructor(error, controller) {
      (this.log = `Express error handler caught unknown middleware error in ${controller}`),
        (this.status = 500),
        (this.message = {
          err: ` an error occured in ${controller}: ${error}`,
        });

    }
  }
  const errorObj = new defaultErr(err.error, err.controller);
  console.log(errorObj.log);
});

app.listen(PORT, async () => {
  console.log("Loading chatbot")
  ragChain = await loadModel()
  console.log("Chatbot loaded")
  console.log(`Server listening on port: ${PORT}`);

});

