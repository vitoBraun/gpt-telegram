Для запуска программы вам нужно

0. Зарегистрировать бота в botfather

1. Создать в корневом каталоге файл .env, и добавить в него следующие
   переменные:

```
OPEN_AI_KEY="Ваш токен openai"
TGBOT_API_KEY='Ваш токен от телеграм бота'
ALLOWED_USERS='перечислить через запятую имена пользователей, которые допущены к пользованию бота. опционально. если не устанавливать эту переменную, будет работать для всех'
```

2. Выполнить

```
npm install
```

3. Выполнить

```
npm start
```

Либо используя менеджер процессов pm2 запустить

```
pm2 start index.js --name gtp-telegram-bot
```
