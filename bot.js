// Importa a biblioteca minetoring [citation:1]
import { Bot, BotOptions } from 'minetoring';

// Configuração do bot
const opt = new BotOptions();
opt.configServer({
    version: '1.26.33', // A versão do seu servidor
    host: 'Duarte5743-EXdi.aternos.me',
    port: 60029
});
opt.configClient({
    username: 'MeuBotNovo', // Nome do bot
    offline: true // Essencial para o Aternos
});

console.log('🔄 Conectando ao servidor Bedrock...');

const bot = new Bot();
try {
    await bot.init(opt);
    await bot.connect();
    console.log('✅ BOT ENTROU NO SERVIDOR!');
} catch (error) {
    console.error('❌ ERRO:', error.message);
}
