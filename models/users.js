const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    num: {
        type: String,
        required: [true, 'num field is required']
    },
    passeword: {
        type: String,
        required: [true, 'numSec field is required']
    },
    
});


UserSchema.virtual('countMovies').get(function(){
    return this.movies.length;
})
UserSchema.pre('remove',function(next){
    Movie.remove({_id: { $in : this.movies}}).then ( ()=> {
        next();
    })
})


const User = mongoose.model('user',UserSchema);

module.exports = User;