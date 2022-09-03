const express = require('express');
const path = require('path');
const app = express();
const internalRouter = require('./routers/internalRouter');
const externalRouter = require('./routers/externalRouter');

const PORT = 3000;

// const router = express.Router();

app.use(express.json()); //parsing json content

// router to serve index.js - PROD ONLY
// app.get('/', (req, res) => {
//   res.send(200).send(path.join(__dirname, 'client', 'index.js'));
// });

// router to handle data requests to/from frontend
app.use('/internal', internalRouter);

// router to handle data requests to/from EXTERNAL APIs
app.use('/external', externalRouter);

// catch-all error (404)
app.use('/', (req, res) => {
  res.sendStatus(404);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express global error handler has been triggered',
    status: 400,
    message: { err: 'An error ocurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// export
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
