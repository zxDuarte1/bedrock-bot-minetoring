import { Bot, BotOptions } from 'minetoring';

const opt = new BotOptions();
opt.configServer({
    version: '1.26.30',        // VERSÃO CORRETA
    host: 'Duarte5743-EXdi.aternos.me',
    port: 60029                // ATUALIZE COM A NOVA PORTA
});
opt.configClient({
    username: 'MeuBotNovo',
    offline: true              // ESSENCIAL para Aternos!
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
