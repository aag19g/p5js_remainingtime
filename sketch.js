let clockDiv;
let messageDiv;
let messages = ["artists presents","artist questions","respondents question"]

function preload(){
}

function setup() {
  noCanvas();
  clockDiv = select("#clock");
  messageDiv = select("#message");
  quoteDiv = select("#quote")
}

function draw() {
  clockDiv.html(hour() + ":" + minute() + ":" + second())
  let messageNumber = minute() %3;
  messageDiv.html(messages[messageNumber]);
}
