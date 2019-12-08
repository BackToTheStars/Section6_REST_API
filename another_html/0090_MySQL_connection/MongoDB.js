db.users.insertOne(
    {
        "name": "Dorsey",
        "email": "jack@gmail.com",
        "age": 27,
        "hasCar":false,
        "favColors": ["Чёрный", "Белый"],
        "password": "djjfj34425",
        "birthday": new Date('1977-6-31')
    });

    
db.users.insertMany([
    {
        "name": "Сева",
        "email": "не знаю",
        "age": 41,
        "hasCar":true,
        "favColors": ["Чёрный", "Белый"],
        "password": "kljhfg",
        "birthday": new Date('1977-6-31'),
        "isFriend": true,
    }, 
    {
        "name": "Виталя",
        "email": "непомню",
        "age": 43,
        "isFriend": false,
    }
]);