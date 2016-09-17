'use strict';

let Nerd = require('./models/nerd');
let path = require('path');

module.exports = function(app) {
    /**
    * Server routes shall come here. Handle things like api calls, Authentication routes etc
    */

    //sample api routes
    app.get('/api/nerds', function(req, res){
        // use mongoose to get all nerds in the database
        Nerd.find(function(err, nerds){
            //if there is an error retrieving, send the error.
            //Nothing after res.send(err) will execute.
            if(err) {
                res.send(err);
            }
            res.json(nerds); // return all nerds in json format.
        });
    });

    app.post('/api/nerds', function(req, res){
        let newNerd = new Nerd();
        newNerd.name = req.body.name;
        newNerd.save(function(err){
            if(err) {
                res.send(err);
            }
            res.json({message : 'Nerd Created!!!'});
        });
    });

    app.get('/api/nerds/:nerdId', function(req, res){
        Nerd.findById(req.params.nerdId, function(err, nerd){
            if(err) {
                res.send(err);
            }
            res.json(nerd);
        });
    });

    app.put('/api/nerds/:nerdId', function(req, res){
        Nerd.findById(req.params.nerdId, function(err, nerd){
            if(err) {
                res.send(err);
            }
            nerd.name = req.body.name; // updated the fetched nerd name with the value passed in the request body

            nerd.save(function(err) {
                if(err) {
                    res.send(err);
                }
                res.json({message : 'Nerd updated!!!'});
            });
        });
    });

    app.delete('/api/nerds/:nerdId', function(req, res) {
        Nerd.remove({
            _id : req.params.nerdId
        }, function(err, nerd) {
            if(err) {
                res.send(err);
            }
            res.json({message : 'Successfully Deleted!!!'});
        });
    });


    /**
     * Front end routes shall come here.
     */

    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html')); // load our public/index.html file
    });

};
