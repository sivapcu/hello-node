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

    // route to handle create nerd requests goes here (app.post)
    // route to handle delete nerd requests goes here (app.delete)


    /**
     * Front end routes shall come here.
     */

    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/views/index.html')); // load our public/index.html file
    });

};
