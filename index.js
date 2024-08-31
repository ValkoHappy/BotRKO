const TelegramApi = require('node-telegram-bot-api');
const {maneMenuOptions} = require('./options')

const token = '7502903124:AAFTl1RxuR7BaoonXb7POO9QkL7pEH9OyqQ';

const bot = new TelegramApi(token, {polling: true});



const start = () => {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if(text === '/start'){
            return bot.sendMessage(chatId, `Привет! Я бот по офферам и тут ты можешь заработать денег!`, maneMenuOptions);
        }
        if(text === '/info'){
            return bot.sendMessage(chatId, `ТЫ ЛОх обвкновенный`);
        }


        return bot.sendMessage(chatId, `Я ТЕБЯ НЕ ПАНИММАТЬ`);
        console.log(msg)
    })

    bot.on('callback_query', msg => {
        const data = msg.data;
        const chatId = msg.chat.id;

        bot.sendMessage(chatId, '')
    })
}

start()