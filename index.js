const express = require("express");
require("dotenv").config();
const { sendMessageToChatGPT } = require("./services/openai-service");
const app = express();

app.use(express.json());

const port = process.env.PORT || 6000;

app.post("/find-complexity", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await sendMessageToChatGPT(message);
    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error: error.response
        ? error.response.data
        : "There was an issue on the server",
    });
  }
});

app.listen(port, () => {
  console.log(`Chat Gpt telegram is running http://localhost:${port}`);
});
