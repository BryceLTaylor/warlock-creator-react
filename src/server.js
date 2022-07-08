import express from 'express';

const hostName = 'localHost';
const port = '8002';

let app = express();

app.use(express.static('./src'));

let server = app.listen(port, () => {
  console.log(`express app listening at ${hostName}:${port}`);
});
