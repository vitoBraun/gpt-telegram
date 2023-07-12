const { OpenAIApi, Configuration } = require("openai");
const configuration = new Configuration({ apiKey: process.env.OPEN_AI_KEY });
const openaiInstance = new OpenAIApi(configuration);

async function sendMessageToChatGPT(message) {
  const response = await openaiInstance.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 1000,
    temperature: 0,
  });
  return response.data.choices[0].text.trim();
}

module.exports = {sendMessageToChatGPT};
