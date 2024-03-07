import OpenAI from 'openai';
import Messaging from './Messaging.js';

class OpenAiMessaging extends Messaging {
    constructor() {
        super();
        this.openai =  new OpenAI({
            apiKey: process.env.OPEN_AI_API_KEY, // Assuming OPEN_AI_API_KEY is set correctly
        });
    }

    message(message) {
        super.message(message);
        if (!message.text || !message.text.length) return;

        this.openai.chat.completions.create({
            messages: [{ role: 'user', content: message.text[0] }],
            model: 'gpt-3.5-turbo',
        }).then(result => {
            this.handleOpenAiReplay(result, message);
        }).catch(error => {
            console.error(error);
            this.fireEvent('error', error.message);
        });
    }

    createPrompt(text) {
        return `hilarious: ${text}`;
    }

    handleOpenAiReplay(replay, message) {
        console.log(replay,'replay',message,'message');
        message.name = 'OpenAi';
        message.text = [this.getAnswer(replay)];
        this.fireEvent('message', message);
    }

    getAnswer(result) {
        const answer = this.cleanString(result.data.choices[0]?.text);
        return answer || 'Confusion will be my epitaph';
    }

    cleanString(str) {
        if (!str) return '';

        const badStart = '?.!@#$%^*()-_';
        while (badStart.includes(str.charAt(0))) {
            str = str.substring(1);
        }

        return str.replace(/\n\n:/, '').replace(/\n/g, '<br/>').trim();
    }
}

export default OpenAiMessaging;
