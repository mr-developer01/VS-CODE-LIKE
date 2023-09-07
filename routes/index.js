var express = require('express');
const fs = require('node:fs');
const path = require('path')
var router = express.Router();

/* GET home page. */
let allFiles = []

// route for reading all from upload folder files:--
router.get('/', function(req, res, next) {
  fs.mkdir('uploads', { recursive: true }, (err) => {
    if (err) throw err;
  }); 
  fs.readdir("./uploads", (err, data) => {
    allFiles = [...data]
    // allFiles = undefined || [...data]
    // console.log(err, data);
    res.render('index', {files: allFiles, action: 'No file is opend now !!'});
  })
});

// route for select and open that selected file:--
router.get("/openfile/:filename", (req, res) => {
  fs.readdir('./uploads', (err, dirFiles) => {
    var fileAddress = `./uploads/${req.params.filename}`;
    fs.readFile(fileAddress, 'utf-8', (err, fileData) => {
      // console.log(fileData);
      res.render('fileopen', {files:allFiles, filedata: fileData, filename: req.params.filename, action: `${req.params.filename} file opened.`})
    })
  })
  // res.send(req.params.filename)
})

// route for deleting selected file:--
router.get('/delete/:filename', (req, res) => {
  var fileDelete = `./uploads/${req.params.filename}`
  console.log(fileDelete);
  fs.unlink(fileDelete, (err, data) => {
    res.redirect('/')
  })
})

// file creation rout:--
router.post("/filecreation", (req, res) => {
  let fileName = `./uploads/${req.body.filename}`
  fs.writeFile(fileName, '', (err) => {
    fs.readdir("./uploads", (err, data) => {
      allFiles = [...data]
      // console.log(err, data);
      res.render('index', {files: allFiles, action: "New File Created !"});
    })
  })
})

// route for saving data from text-area in selected file:--
router.post("/savefile/:filename", (req, res) => {
  var fileAddress = `./uploads/${req.params.filename}`
  fs.writeFile(fileAddress, req.body.textData, (err) => {
    fs.readdir("./uploads", (err, data) => {
      res.render('index', {files: allFiles, action: `${req.params.filename} saved !`});
    })
  })
})

module.exports = router;
