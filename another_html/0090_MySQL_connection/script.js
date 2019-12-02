
const Datastore = require('nedb');
const database = new Datastore('database.db');

let timestamp = new Date(Date.now()).toLocaleString();
let inputData = {type: 'news', header: 'Some header', body: 'Some text', time: timestamp};

database.loadDatabase();
database.insert(inputData);


// console.log(database.find({}));


