'use strict';
// grab the mongoose module
let mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('nerd', {
    name : {type : String, default: ''}
});
