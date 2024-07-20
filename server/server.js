import express from 'express';
// import { handler } from '../build/handler.js';
//import { handler } from '../build/handler.js';
// import type { ErrObj } from './types.ts'


const app = express();
const PORT = 3000;

app.use(express.json());
//app.use(handler);

app.use ('/', (req, res) => {res.status(200).json({test: "testing"})})

// app.get('/', (req, res, next) => {
//     // res.set('Content-Type', 'text/html'); 
//     res.set('Content-Type', 'text/html').sendFile('/Users/josh/Documents/Svelte OSP/SvARIA/src/routes/+page.svelte', (err) => {
//         if(err) {
//             next(err, 'Get: / Middleware')
//         }
//         else{
//             console.log(`Server started successfully on port ${PORT}`)
//         }
//     });
// });

//404 error handling
app.use('*', (req, res) => res.status(404).send({message:'404ed'}));

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

export default app;