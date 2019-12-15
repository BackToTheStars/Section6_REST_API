var request  = require("request");
var cheerio  = require("cheerio");

var url = "https://reddit.com/top/";

request (url, function(err, _response, html) {
    if(!err) {
        var $ = cheerio.load(html);
        var allItems = $("#siteTable").children();
        var items = [];
        allItems.each(function(index) {
            items.push($("#siteTable").children().eq(index).children().eq(4).find("a.title").text())
        });
        console.log(items);
    }
});