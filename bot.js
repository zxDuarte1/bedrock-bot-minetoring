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
    username: 'pereira.duarte@escolar.ifrn.edu.br', // Email da sua conta Microsoft
    password: '@Biel192biel192',                      // Senha da sua conta
    offline: false,                             // Agora é FALSE!
    authflow: 'msal'                           // Importante para autenticação
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
