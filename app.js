const express = require('express')
const app = express();
const path = require('path');

const PORT = 3030

app.use(express.static('public/img'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})


app.get('/babbage.html',function(req,res){
    res.sendFile(path.join(__dirname,'/views/babbage.html'))
})

app.get('/berners-lee.html',function(req,res){
    res.sendFile(path.join(__dirname,'/views/berners-lee.html'))
})

app.get('/hamilton.html',function(req,res){
    res.sendFile(path.join(__dirname,'/views/hamilton.html'))
})

app.get('/clarke.html',function(req,res){
    res.sendFile(path.join(__dirname,'/views/clarke.html'))
})

app.get('/hopper.html',function(req,res){
    res.sendFile(path.join(__dirname,'/views/hopper.html'))
})

app.get('/lovelace.html',function(req,res){
    res.sendFile(path.join(__dirname,'/views/lovelace.html'))
})

app.get('/turing.html',function(req,res){
    res.sendFile(path.join(__dirname,'/views/turing.html'))
})

app.listen(PORT,function(){
    console.log('Servidor Levantado');
})