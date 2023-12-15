import { Configuration, OpenAIApi } from "openai";
import 'dotenv/config'

const askToChatGpt = async function (req, res) {
  /**
   * 1. Create/configure OpenAI Instance
   */
  const openAIInstance = await _createOpenAIInstance();

  /**
   * 2. Let's talk to chatGPT
   */
  await openAIInstance
    .createCompletion({
      model: "text-davinci-003",
      prompt: req.body.message,
      temperature: 0,
      max_tokens: 500,
    })
    .then((response) => {
      const repliedMessage = response.data.choices[0].text;
      res.send({ from: "chatGpt", data: repliedMessage });
    })
    .catch((error) => {
      // Report error
      console.log("Error ", error);
    });
};

const _createOpenAIInstance = async () => {
  const conf = await new Configuration({
    // eslint-disable-next-line no-undef
    apiKey: process.env.CHATGPT_TOKEN,
  });
  return await new OpenAIApi(conf);
};

export default {
  askToChatGpt,
};
