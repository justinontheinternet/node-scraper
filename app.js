var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var url = 'http://substack.net/images/';

request(url, function(error, response, body){
  if (!error) {
    $ = cheerio.load(body);
    permissions = $('code').text();
    urls = $('a').attr('href');
    fileTypes = $('a').match(/\.*/);
    console.log(fileTypes);
  } else {
    console.log("Error:", error);
  }
  
});



// .pipe(fs.createWriteStream('doodle.png'))