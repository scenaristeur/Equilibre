import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { askToChatGpt } from './chatGpt.controller.js';
import { embedAndSim } from './embedAndSim.controller.js';

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.post('/chatbot', askToChatGpt);
app.post('/embedAndSim', embedAndSim);


// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});