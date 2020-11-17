require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongodb=require('mongodb')
const ObjectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASS}@cluster0.hxlwa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
client.connect(err => {
  const collectionData = client.db("apartmentHunt").collection("booking")
const   adminCollection= client.db("apartmentHunt").collection("admin")
const   infoCollection=client.db("apartmentHunt").collection("info")

app.post('/admin', (req,res)=>{
    const email=req.body.email;
    adminCollection.insertOne({email})
    .then(result=>{
        res.send(result.insertedCount > 0)
    })
})
    
app.post('/newHouse', (req, res) => {
    const houseName = req.body.houseName;
    const price = req.body.price;
    const bedRoom = req.body.bedRoom;
    const bathRoom = req.body.bathRoom;
    const address = req.body.address;
    const file = req.files.files;

    const filePath = `${__dirname}/doctors/${file.name}`;
    file.mv(filePath, err => {
        if (err) {
            console.log(err);
        }
        const newImg = req.files.files.data;
        const encImg = newImg.toString('base64');

        var image = {
            content: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, 'base64')

        }
        collectionData.insertOne({ houseName, price,bedRoom,bathRoom,address , image })
            .then(result => {
                res.send(result)
            })

    })
});


  app.get('/getData', (req,res)=>{
 collectionData.find({})
.toArray((err,documents)=>{
    res.send(documents)
        })
  });
  app.get('/allUser', (req,res)=>{
    infoCollection.find({})
   .toArray((err,documents)=>{
       res.send(documents)
           })
       });

 app.get('/getData/:id', (req,res)=>{
     collectionData.find({_id: ObjectId(req.params.id)})
     .toArray((err , documents)=>{
         res.send(documents[0])
     })
 });

 app.post('/isAdmin', (req, res) => {
    adminCollection.find({ email: req.body.email })
        .toArray((err, documents) => {
            res.send(documents)
        })
})
 app.get('/myRent', (req, res) => {
    infoCollection.find({ email: req.query.email })
        .toArray((err, document) => {
            res.send(document)
        })
})
    
app.post('/sendInfo', (req,res)=>{
    infoCollection.insertOne(req.body)
    .then(result=>{
        res.send(result.insertedCount > 0)
    })
})

});



const PORT= process.env.PORT || 3500;
app.listen(PORT, ()=>{
    console.log('Server run on port 3500');
});
