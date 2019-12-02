
const Datastore = require('nedb');
const database = new Datastore('database.db');

let timestamp = Date.now();
let data = {type: 'news', header: 'Some header', body: 'Some text', time: timestamp};

database.loadDatabase();
database.insert(data);


