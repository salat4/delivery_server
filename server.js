const express = require("express")
const mongo = require("mongodb").MongoClient
const cors = require('cors');
require('dotenv').config()
const app = express()
const url = "mongodb://localhost:27017"

let db, shops, product , order

app.use(express.json());
app.use(cors());

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
      db = client.db("delivery")
      shops = db.collection("shops")
      product = db.collection("product")
      order = db.collection("order")
  }
)
app.get('/shops', (req, res) => { 
    shops.find().toArray((err, items) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    res.status(200).json({ shops: items })
  })

})
app.get('/product', (req, res) => { 
    const id  = req.query.id;
    product.find({"id":`${id}`}).toArray((err, items) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    res.status(200).json({ product: items })
  })
})
app.post('/order', (req, res) => { 

    order.insertOne({ 
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        products: req.body.products,

    }, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json({ err: err })
            return
        }
        res.status(200).json({ ok: true })
    })    
})
app.listen(8080, () => console.log("Server ready"))



const port = process.env.PORT || 3000;
app.listen(port);