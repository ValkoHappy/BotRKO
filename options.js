module.exports = {
    maneMenuOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Доступные офферы', callback_data: 'offers'}],
                [{text: 'Рефералы', callback_data: 'referrals'}],
                [{text: 'Баланс', callback_data: 'balance'}],
            ]
        })
    }
}