const express = require('express')
const cors = require('cors')
const multer = require('multer')
require('./db/conn')
const userModel = require('./model/userSchema');

const app = express()
const port = 3001;

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// const upload = multer({ storage: storage });

const upload = multer({ dest: 'uploads/' }); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post("/mobile-app-development", upload.single('file'), async(req,res)=>{
    console.log(req.body);
    const newImg = new userModel({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      desc:req.body.desc,
      file:{
        data:req.file.filename,
        contentType:'image/png'
      }
    });
    await newImg.save();
    res.send({success:true, message:"Data save successfully"});
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})