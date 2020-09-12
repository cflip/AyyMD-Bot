const Discord = require('discord.js');
const Tesseract = require ('tesseract.js')
const dclient = new Discord.Client();
const config = require("./config.json");

async function ocr(message) {
    console.log(message);
    
    var url;

    if (message.attachments.size > 0) {
        url = message.attachments.first().url;
        console.log(url)
    } else if (message.embeds.length > 0) {
        url = message.embeds[0].url;
        console.log(url)
    } else {
        message.channel.send("Please attach an image");
        return;
    }
      
    
    if (url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jfif") || url.endsWith(".jpeg") || url.endsWith(".bmp")  || url.endsWith(".dib")) {
        var progressMsg = await message.channel.send("Connecting to API...");
        Tesseract.recognize(
            (url),
            'eng',
            { logger: m => {
                console.log(m) 
                if (m.progress > 0 && m.progress < 1 && m.progress != 0.5)
                    progressMsg.edit("Processing... "+m.progress.toLocaleString(undefined, {style: 'percent', minimumFractionDigits:2}))
            }}
        ).then(({ data: { text } }) => {
            console.log(text);
            progressMsg.delete()
            if (text.length > 0){
            message.channel.send('``' + text + '``');}
            else message.channel.send('⚠️ No text found. ');
        });
    } else if (url.endsWith(".txt")) {

    } else {
        message.channel.send("File format is not supported");
}}function cringecheck1(message) {
    if (message.content.toLowerCase().includes('dont')){
        if (message.content.toLowerCase().includes('dont not not not')){message.react('697801525925380096');}
        else if (message.content.toLowerCase().includes('dont not not')){message.react('701869345072218113');}
        else if (message.content.toLowerCase().includes('dont not')){message.react('697801525925380096');}
        else {message.react('701869345072218113');}
    }
    else if (message.content.toLowerCase().includes("don't")){
        if (message.content.toLowerCase().includes("don't not not not")){message.react('697801525925380096');}
        else if (message.content.toLowerCase().includes("don't not not")){message.react('701869345072218113');}
        else if (message.content.toLowerCase().includes("don't not")){message.react('697801525925380096');}
        else {message.react('701869345072218113');}
    }
    else if (message.content.toLowerCase().includes("don’t")){
        if (message.content.toLowerCase().includes('don’t not not not')){message.react('697801525925380096');}
        else if (message.content.toLowerCase().includes('don’t not not')){message.react('701869345072218113');}
        else if (message.content.toLowerCase().includes('don’t not')){message.react('697801525925380096');}
        else {message.react('701869345072218113');}
    }
    else if (message.content.toLowerCase().includes("do not")){
        if (message.content.toLowerCase().includes('do not not not not')){message.react('697801525925380096');}
        else if (message.content.toLowerCase().includes('do not not not')){message.react('701869345072218113');}
        else if (message.content.toLowerCase().includes('do not not')){message.react('697801525925380096');}
        else {message.react('701869345072218113');}
    }
    else if (message.content.toLowerCase().includes("ever")){
        if (message.content.toLowerCase().includes('ever not not not ')){message.react('697801525925380096');}
        else if (message.content.toLowerCase().includes('ever not not')){message.react('701869345072218113');}
        else if (message.content.toLowerCase().includes('ever not')){message.react('697801525925380096');}
        else {message.react('701869345072218113');}
    }
    else {message.react('697801525925380096');}
}function cringecheck2(message) {
    if (message.content.toLowerCase().includes('dont')){
        if (message.content.toLowerCase().includes('dont not not not')){message.react('701869345072218113');}
        else if (message.content.toLowerCase().includes('dont not not')){message.react('697801525925380096');}
        else if (message.content.toLowerCase().includes('dont not')){message.react('701869345072218113');}
        else {message.react('697801525925380096');}
    }
    else if (message.content.toLowerCase().includes("don't")){
        if (message.content.toLowerCase().includes("don't not not not")){message.react('701869345072218113');}
        else if (message.content.toLowerCase().includes("don't not not")){message.react('697801525925380096');}
        else if (message.content.toLowerCase().includes("don't not")){message.react('701869345072218113');}
        else {message.react('697801525925380096');}
    }
    else if (message.content.toLowerCase().includes("don’t")){
        if (message.content.toLowerCase().includes('don’t not not not')){message.react('701869345072218113');}
        else if (message.content.toLowerCase().includes('don’t not not')){message.react('697801525925380096');}
        else if (message.content.toLowerCase().includes('don’t not')){message.react('701869345072218113');}
        else {message.react('697801525925380096');}
    }
    else if (message.content.toLowerCase().includes("do not")){
        if (message.content.toLowerCase().includes('do not not not not')){message.react('701869345072218113');}
        else if (message.content.toLowerCase().includes('do not not not')){message.react('697801525925380096');}
        else if (message.content.toLowerCase().includes('do not not')){message.react('701869345072218113');}
        else {message.react('697801525925380096');}
    }
    else if (message.content.toLowerCase().includes("ever")){
        if (message.content.toLowerCase().includes('ever not not not ')){message.react('701869345072218113');}
        else if (message.content.toLowerCase().includes('ever not not')){message.react('697801525925380096');}
        else if (message.content.toLowerCase().includes('ever not')){message.react('701869345072218113');}
        else {message.react('697801525925380096');}
    }
    else {message.react('701869345072218113');}
}dclient.login(config.token); // login the bot with your token.
dclient.on('message', message => { // Checks for command
    if (message.member.user === dclient.user) {
        return;}
{//universal commands
    if (config.allowedchannels.includes(message.channel.id)){
    if((message.content.toLowerCase() === 'a!help'))
	message.channel.send("``Command Help``\na!woag - wide woag\na!doge - wide doge\na!putin - wide putin be walkin\na!ocr - identifies text in an image using tesseract api\na!say - repeats the text after say\na!yandev - yandere dev\na!custom - lists custom commands for the server this command is sent in\n``Other Miscellaneous Features``\nRule 7 Sensor - if nvidiotism or uninteligence is detected in a message, I will say <:peepocringe:697801525925380096>\nSwear Filter - if I detect a hard r in a message, I will delete it and send a funny gif\nInactivity Timer - if a channel is inactive for a specified amount of time, I will send a message custom to that server\n   ");
    if((message.content.toLowerCase() === 'a!woag'))
    message.channel.send("<:woag1:730641000145616906><:woag2:730640992797196339>");
    if((message.content.toLowerCase() === 'a!doge'))
    message.channel.send("<:doge1:730637136629465188><:doge2:730637219278356542>");
    if((message.content.toLowerCase() === 'a!putin'))
    message.channel.send("<:putin1:730931077450956810><:putin2:730931099890352265>");
    if((message.content.toLowerCase() === 'a!pogfish'))
    message.channel.send("<a:pogfish:663943285328445465>");
    if((message.content.toLowerCase() === 'a!yandev'))
    message.channel.send("<:yandevstare:736768240226795653>")
    if (message.content.toLowerCase().startsWith("a!ocr"))
    ocr(message);
    if (message.content.toLowerCase().startsWith("a!say"))
    message.channel.send('``' + message.content.substr(message.content.indexOf(" ") + 1) + '``');
    if (message.content.toLowerCase().startsWith("im"))
    message.channel.send('hi ' + message.content.substr(message.content.indexOf(" ") + 1) + ', im AyyMD bot!');
}}{//kirbbot testing commands
    if (message.channel.id == 730612157133226068){
	if((message.content.toLowerCase() === 'a!ctoast'))
	message.channel.send("are you tired of burning your toast? does it always ruin the morning? do you constantly have to get new toast because of the toast burning? well with the all new ctoast toaster you will never burn your toast again you use it just like a regular toaster you put your toast in put it down and set your heat you can toast up to 2 pieces of toast at once and you can see the toast toasting from either side through the tempered glass windows and with all these features in one toaster it will ensure that you get the perfect toast every time it can be yours for only $79.99 yes you hear that right only $79.99 you can pick it up at your local appliance dealer or on amazon for only $79.99 you can also order it from us and get a complimentary loaf of bread call 1800-1-ctoast once again that is 1800-128-6278 and it can be yours for only $79.99");
    if((message.content.toLowerCase() === 'a!quaaludes'))
	message.channel.send("Ey, the big man's baca! www dot the kid from brooklyn dot com. Ever see them signs on a highway billboards years ago? I'd walk a mile for a camel. Or they used to have cigarette commercials, the guy used to say, I'd walk a mile for a camel.? Well, let me tell all you young people out there: The big man would walk 20 miles for a Quaalude, let me tell ya! That was the drug back then, in the late 70s and 80s: Quaaludes! The good old Rorer 714, then they changed it to Lemmon. I tell ya! I wish I had a couple of them fucking Lemmons now! That was the best fucking drug ever made! It was so fucking good, the government took them off the fucking market 'cause they were putting the fucking drug-dealers out of fucking business! Non-narcotic, non-addictive, bring back those fucking Quaaludes! You can take all the fucking cocaine, marijuana, and all them fucking designer drugs they make today, and stick them up your fucking ass! There's nothing like a fucking Quaalude! I figured they were the fucking best, having sex and a Quaalude, you thought you'd died and went to heaven, let me tell ya. And when you had an orgasm, you thought you were on the fucking moon! Bring back those fucking Quaaludes! Anyway, think about it! This is the big man, the voice! The voice of the people! Rorer 714! And the big man's always, alway haha happy to see you! ");
}}{//ayymd botspam commands
    if (message.channel.id == 390225609550331924){
    if((message.content.toLowerCase() === 'ayy'))
    message.channel.send("md")
    if((message.content.toLowerCase() === 'gayy'))
    message.channel.send("intelmao")
}}{//verification
    if (message.channel.id == 752600769357807637){
    if (message.content.toLowerCase().includes('testa' || 'testb'))
    message.channel.send("yes")
}}{//ayymd universal commands
    if (['390225609550331924', '684038729291399220'].includes(message.channel.id)){
{//rule 7 part 1
    if (message.content.toLowerCase().includes('i like intel')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('i love intel')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel makes good')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel makes better')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel based')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel better')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel good')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel best')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel is based')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel is absolutely based')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel is better')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel is good')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel is best')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('buy intel')){cringecheck1(message)}
    else if (message.content.toLowerCase().includes('buy an intel')){cringecheck1(message)}
    else if (message.content.toLowerCase().includes('buy nvidia')){cringecheck1(message)}
    else if (message.content.toLowerCase().includes('buy an nvidia')){cringecheck1(message)}
    else if (message.content.toLowerCase().includes('intel is the best')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('intel makes the best')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('i like nvidia')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('i love nvidia')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia makes good')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia makes better')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia based')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia good')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia better')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia best')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia is based')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia is absolutely based')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia is good')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia is better')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia is best')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia is the best')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('nvidia makes the best')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('amd bad')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('amd sucks')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('amd cringe')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('fuck amd')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('amd is bad')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('amd is cringe')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('amd is shit')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('amd shit')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('hate amd')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('amd gay')){message.react('697801525925380096');}
    else if (message.content.toLowerCase().includes('amd is gay')){message.react('697801525925380096');}
    else if((message.content.toLowerCase() === 'politics')){
        message.react('687681502192205869');
        message.react('707989757480665149');
        message.react('697801525925380096');
        message.react('692446527796281354');}
}{//rule 7 part 2
    if (message.content.toLowerCase().includes('i like amd')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('i love amd')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd makes good')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd based')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd better')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd good')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd best')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd is based')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd is absolutely based')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd is better')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd is good')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd is best')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('buy amd')){cringecheck2(message)}
    else if (message.content.toLowerCase().includes('buy an amd')){cringecheck2(message)}
    else if (message.content.toLowerCase().includes('amd is the best')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd instead of intel')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd instead of shintel')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('amd makes the best')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('intel bad')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('intel sucks')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('intel cringe')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('fuck intel')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('intel is bad')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('intel is shit')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('intel shit')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('intel is cringe')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('hate intel')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('intel is gay')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('intel gay')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('nvidia bad')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('nvidia sucks')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('nvidia cringe')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('fuck nvidia')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('fuck you nvidia')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('nvidia is bad')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('nvidia is shit')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('nvidia shit')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('nvidia is cringe')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('hate nvidia')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('nvidia is gay')){message.react('701869345072218113');}
    else if (message.content.toLowerCase().includes('nvidia gay')){message.react('701869345072218113');}
}}}
{//works in every channel
    if((message.content.toLowerCase() === 'good bot')){message.react('606156336203300866');}
    if (message.content.toLowerCase().includes('nigger'))
    message.channel.send("https://media.discordapp.net/attachments/724731046372966420/730209353784885358/Bad_word.gif")
}});