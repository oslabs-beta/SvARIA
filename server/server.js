// @ts-nocheck 
import express from 'express';
// import { handler } from '../build/handler.js';
import router from './routes/api.js';

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(handler);


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

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

