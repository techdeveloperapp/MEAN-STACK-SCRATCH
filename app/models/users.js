var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  name: String,
  email: String,
  password: String,
  created_at: { type: Date, default: Date.now() },
  age: { type: Number, min: 18, max: 65, required: true },
  _someId: Schema.Types.ObjectId,
});

UserModelSchema.statics = {
    create : function(data, cb) {
        var user = new this(data);
        user.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var usersModel = mongoose.model('Users', UserModelSchema);
module.exports = usersModel;
