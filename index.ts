import * as express from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port: ${PORT}`);
});