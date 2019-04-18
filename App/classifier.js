//Uses IBM Natural Language Understanding AI to classify user input
var parameters, result;
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2018-11-16',
  iam_apikey: 'API-KEY',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api'
});

function initData(usrIn) {
  parameters = {
    // 'html': '<html><head><title>Fruits</title></head><body><h1>Apples and Oranges</h1><p>I love apples! I don\'t like oranges.</p></body></html>',
    'text': usrIn, //Pass through user input *YAY THIS FINALLY WORKS*
    'features': {
      'emotion': {
      }
    }
  };
}

function getData(input){
  initData(input);
  naturalLanguageUnderstanding.analyze(parameters, function(err, response) {
    try{
      //console.log(JSON.stringify(response, null, 2));
      console.log(JSON.stringify(response, null, 2));
      //eturn(result);
      // console.log(result);
    }
    catch (error){
      console.log(error);
    }
  });
}

getData('kim jong un nation, north korea best korea');
// console.log(result);
