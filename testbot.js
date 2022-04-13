require('dotenv').config();



const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER'] });

    const PREFIX = "$";


client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});


client.on('messageReactionAdd', (reaction, user, message) => {
    const member = reaction.message.guild.members.cache.get(user.id);
    //console.log(reaction.message.guild.members.cache.get())
    //console.log(`${member.user.tag} 對 ${reaction.message.author}: "${reaction.message.content}"
    //發了表情: ${reaction.emoji.name}`); 
    //紀錄表情符號用

    if((reaction.emoji.name === 'shutup')||(reaction.emoji.name === 'ShutUp') ){
        reaction.message.reply(`閉嘴`)
    }


});

let words = ["港仔"];



client.on('message', (message) => {
    if(message.channelId === "963100345628782592") return;
    //
    //console.log(message.author);
    console.log(`[${message.author.tag}]: ${message.content}   頻道:(${message.channel.name})`);
    // client.channels.cache.get(`963100345628782592`).send(`[${message.author.tag}]: ${message.content}   頻道:(${message.channel.name})`);
    if(message.author.bot) return;
    const randomNum2 = Math.floor(Math.random() * 100);
    if (message.content === 'hello'){
        message.reply('hello')
    }
    if(message.content === 'apple'){
        message.react('🍎');
    }else if(message.content == 'strawberry'){
        message.react('🍓');
    }
    if(message.content.includes("想睡覺")){
        message.channel.send("快點去睡");
    }
    if(message.content.includes("RICKROLL")){
        message.reply("https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif");
    }
    if(message.content.includes("的機率")){
        
        message.reply(`${randomNum2}%`);
    }else if(message.content.includes("會不會")){
        if(randomNum2 > 50){
            message.reply('會');
        }else{
            message.reply('不會');
        }
    }else if(message.content.includes("是不是")){
        if(randomNum2 > 50){
            message.reply('是');
        }else{
            message.reply('不是');
        }
    }
    if(message.member.roles.cache.has("962978389491339274")){
        const randomNum = Math.floor(Math.random() * 100);
        console.log(randomNum);
        if(randomNum === 3){
            message.reply("https://cdn2.ettoday.net/images/2828/d2828337.jpg");
            message.channel.send("當然是選擇原諒囉");
        }else if((randomNum % 5) === 0){
            message.react('🎂');
        }
    }
    



    if (message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
            //console.log(CMD_NAME);
            //console.log(args);
        if(CMD_NAME === "birth" || CMD_NAME === "birthday"){
            if(guild.id !== "857850634166337546"){
                message.channel.send("該伺服器不支援");
                return;
            }
            message.member.roles.add('962978389491339274');

        }else if(CMD_NAME === "directsay" || CMD_NAME === 'ds'){
            client.channels.cache.get(`857850634166337549`).send(args[0]);
        }else if(CMD_NAME === "say"){
            client.channels.cache.get(args[0]).send(args[1]);
        }else if(CMD_NAME === "sleep" || CMD_NAME === "sl"){
            client.user.setUsername("睡覺不能打code");
            client.user.setActivity("https://www.youtube.com/watch?v=34Ig3X59_qA", {
                name: '睡覺',
                type: "PLAYING"
              });
        }else if(CMD_NAME === "awake" || CMD_NAME === "aw"){
            if(args.length === 0){
                message.channel.send("你要改什麼");
                return;
            }
            client.user.setUsername(`${args[0]}`)
            client.user.setActivity("coding", {
                name: 'none',
                type: "PLAYING"
              });
        }
    }




    
});

client.on('voiceStateUpdate', (oldState, newState) => {
     //console.log(newState.channelId);
    //setTimeout(function(){ 
    //    doSomething(); 
    //}, 3000);
    const New = newState.channelId;
    const Old = oldState.channelId;//963100345628782592
    
    if(New === Old){
        console.log(`${newState.member.user.tag} 開麥/關麥`);
        // client.channels.cache.get(`963100345628782592`).send(`${newState.member.user.tag} 開麥/關麥`);
    }
    else if(New===null){ //left
        console.log(`${newState.member.user.tag} 離開了 ${oldState.channel.name}`);
        // client.channels.cache.get(`963100345628782592`).send(`${newState.member.user.tag} 離開了 ${oldState.channel.name}`);
    }
    else if(Old===null){
        console.log(`${newState.member.user.tag} 加入了 ${newState.channel.name}`);
        // client.channels.cache.get(`963100345628782592`).send(`${newState.member.user.tag} 加入了 ${newState.channel.name}`);
    }
    else if( New !== null && Old !== null){ // moved
        console.log(`${newState.member.user.tag} 從 ${oldState.channel.name} 移到了 ${newState.channel.name}`);
        // client.channels.cache.get(`963100345628782592`).send(`${newState.member.user.tag} 從 ${oldState.channel.name} 移到了 ${newState.channel.name}`);
    }
    else{
        console.log(`${newState.member.user.tag} 離開了 ${oldState.channel.name}`);
        // client.channels.cache.get(`963100345628782592`).send(`${newState.member.user.tag} 離開了 ${oldState.channel.name}`);
    }
    //console.log(newState.id);
    if(newState.channelId === '857875033257672764'){
        if(newState.channel.members.size > 1){

            return;
        }
        client.channels.cache.get(``).send(`A配了吧`)//962781585495699476
        //console.log(newState.channel.members.size)
        //OWNChannel.send("A配了吧");
    }
        
});



client.login(process.env.DISCORDJS_TESTING_TOKEN);

