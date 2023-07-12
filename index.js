require("dotenv").config();
const { sendMessageToChatGPT } = require("./services/openai-service");

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.TGBOT_API_KEY, { polling: true });

const allowedUsers =
  process.env.ALLOWED_USERS?.replace(" ", "").split(",") || null;

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  if (msg.text == "/start") {
    bot.sendMessage(chatId, "Приветствую! Я ChatGPT, введите ваш вопрос.");
  }
  if (
    (allowedUsers?.includes(msg.chat.username) || allowedUsers == null) &&
    msg.text !== "/start"
  ) {
    bot.sendMessage(chatId, "пишу ответ, ждите...");
    const gptResponse = await sendMessageToChatGPT(msg.text);
    bot.sendMessage(chatId, gptResponse);
  }
});
