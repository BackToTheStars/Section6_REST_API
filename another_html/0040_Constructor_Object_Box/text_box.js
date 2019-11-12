
// https://www.youtube.com/watch?v=izR19HsNY2g
// https://www.youtube.com/user/loftblog/videos
// https://www.youtube.com/watch?v=SveV1LXwWZ4&list=PLY4rE9dstrJzNRmAeTHXAlT7lJFC2YjDg&index=3

var NewsBox = function (
    primaryHeader,
    secondaryHeader,
    text
    ) {                                           // имя конструктора пишется
    this.primaryHeader = primaryHeader;           // с большой буквы
    this.secondaryHeader = secondaryHeader;
    this.text = text;
    
    var privateVariable = {};                     
    // приватная переменная, может быть вызвана только изнутри класса
                                                  
    this.printToConsole = function () {
        console.log("Header: "+this.primaryHeader);
        console.log("Second header: "+secondaryHeader);
        console.log("News: "+this.text);
    }
};

var news = [];                                    // массив новостей - или запись в базе данных

news[0] = new NewsBox(                            // вызов конструктора создания объекта
    'Header',
    'One More Header',
    'Some news text goes here'
    );                                            





