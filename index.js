var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1504869891',
  channelSecret: '14baadc381cd685094fdb7bcb8567c4f',
  channelAccessToken: 'ROlz+hP10LcWe+Ptwk6+VcCi+CxwntCG6IFcV0HcMTiDHN5jp0+ECOZVfCXec6o1vUM/1OdrDSWn5mSQ9ZKt0vYaotVT7kgyjSua81RAvGogj8yjztIyEL5GNsmo8jHstpT1RKcuObiUiN6ORNo6gQdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});