module.exports = {
    db: {
        "host": process.env.HOT,
        "port": process.env.PORT_,
        "database": process.env.DATABASE,
        "password": "",
        "name": "db",
        "connector": "mongodb",
        "user": ""
      }
}

//i copied this from datasources.js, was just trying to confirm if it works by altering my local host
//and it worked
/**
"db": {
      "host": "localhost",
      "port": 27017,
      "database": "mywebsite",
      "password": "",
      "name": "db",
      "connector": "mongodb",
      "user": ""
    },
 */
/*
   "loopback#static": {
      "params": "$!../client"
    }*/