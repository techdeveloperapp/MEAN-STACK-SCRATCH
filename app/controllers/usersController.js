var UserModel = require('../models/users');

// Display list of all Authors.
exports.add_user = function(req, res) {

    var user = {
	    name: 'Shubham',
	    email: 'shubham@yopmail.com',
	    password: 'test',
	    age: 19
	};

    UserModel.create(user, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User created successfully"
        })
    })
};

// Display list of all Authors.
exports.edit_user = function(req, res) {
	var myquery = {name: 'Shubham'};
    var newvalues = {name: "Mickey"};
    UserModel.update(myquery, newvalues, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User updated successfully"
        })
    })
};

// Display list of all Authors.
exports.delete_user = function(req, res) {
    var find = {name: "Mickey"};
    UserModel.delete(find, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User deleted successfully"
        })
    })
};

// Display list of all Authors.
exports.list_user = function(req, res) {
    res.send('NOT IMPLEMENTED: List User');
};