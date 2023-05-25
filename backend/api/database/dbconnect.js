const connection_url = 'mongodb+srv://dileep1995:2april2011@cluster0.db2yx.mongodb.net/ecommerce?retryWrites=true&w=majority'


const mongoose = require('mongoose')

mongoose.connect(connection_url, 
                                {
                                  useNewUrlParser: true,
                                  useUnifiedTopology: true
                                }
                )

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});




