var request = require('request')
    , cheerio = require('cheerio');

var searchTerm = 'screen+scraping';
var url = 'http://www.bing.com/search?q=' + searchTerm;

request(url, function(err, resp, body){
  $ = cheerio.load(body);
  links = $('.sb_tlst h3 a'); //use your CSS selector here
  $(links).each(function(i, link){
    console.log($(link).text() + ':\n  ' + $(link).attr('href'));
  });
});