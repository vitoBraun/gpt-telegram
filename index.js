require("dotenv").config();
const { sendMessageToChatGPT } = require("./services/openai-service");

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.TGBOT_API_KEY, { polling: true });

const allowedUsers =
  process.env.ALLOWED_USERS?.replace(" ", "").split(",") || null;

bot.on("message", async (msg) => {
  if (
    (allowedUsers?.includes(msg.chat.username) || allowedUsers == null) &&
    msg.text !== "/start"
  ) {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "пишу ответ, ждите...");
    const gptResponse = await sendMessageToChatGPT(msg.text);
    bot.sendMessage(chatId, gptResponse);
  }
});
