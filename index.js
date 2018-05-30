var linebot = require('linebot');
var express = require('express');
var path = require('path');
 
var bot = linebot({
    channelId: '你的機器人的channelId',
    channelSecret: '你的機器人的channelSecret',
    channelAccessToken: '你的機器人的channelAccessToken'
});
 
var message = {
    "你好":"我不好",
    "你是誰":"我是ㄐ器人"
};
 
bot.on('message', function (event) {
    var respone;
    if(message[event.message.text]){
        respone = message[event.message.text];
    }else{
        respone = '我不懂你說的 ['+event.message.text+']';
    }
    console.log(event.message.text + ' -> ' + respone);
    bot.reply(event.replyToken, respone);
});
 
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);
 
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});