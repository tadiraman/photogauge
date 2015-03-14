/**
 * User: tadiraman
 * Date: 3/14/2015
 * Time: 12:06 PM
 */
/**
 * User: tadiraman
 * Date: 3/14/2015
 * Time: 10:38 AM
 */

/*
 var http = require('http');
 var express = require('express');
 var request = require('request');
 var bodyParser = require('body-parser');

 http.globalAgent.maxSockets = 10000;
 var config = require('./config');
 */

/*Define dependencies.*/

var express=require("express");
var multer  = require('multer');
var app=express();
var port = 3050;
var done=false;

/*Configure the multer.*/

app.use(multer({ dest: './uploads/',
    rename: function (fieldname, filename) {
        return filename+Date.now();
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
        done=true;
    }
}));

/*Handling routes.*/

app.get('/',function(req,res){
    res.sendfile("client/index.html");
});

app.post('/api/photo',function(req,res){
    if(done==true){
        console.log(req.files);
        res.end("File uploaded.");
    }
});

/*Run the server.*/
app.listen(port,function(){
    console.log("Working on port: " + port);
});
