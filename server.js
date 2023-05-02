const express = require('express');
const app = express();

app.use(express.json());

const thetaStreamRouter = require('./routes/video');

app.use('/api/video', thetaStreamRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
