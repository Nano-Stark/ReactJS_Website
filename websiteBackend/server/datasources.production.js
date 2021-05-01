module.exports = {
    db: {
        "host": process.env.HOST_,
        "port": process.env.PORT_,
        "url": process.env.MONGODB_URI,
        "database": process.env.DATABASE,
        "password": process.env.PASSWORD,
        "name": "db",
        "user": process.env.USER,
        "useNewUrlParser": true,
        "connector": "mongodb"
        }
}
//COPIED FROM datasourc.prod.json to allow this code and allow env var after installing dotenv
//and putting it into servere.js file via require function
/*    "db": {
        "host": "reactjs-website-cluster.9xbvj.mongodb.net",
        "port": 27017,
        "url": "mongodb+srv://stark:stark70@reactjs-website-cluster.9xbvj.mongodb.net/mywebsite?retryWrites=true&w=majority",
        "database": "mywebsite",
        "password": "stark70",
        "name": "db",
        "user": "stark",
        "useNewUrlParser": true,
        "connector": "mongodb"
        } */