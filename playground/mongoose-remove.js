const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '58ad703f937d5e1b62c7eef1'}).then((todo) => {

// });

Todo.findByIdAndRemove('58ad703f937d5e1b62c7eef1').then((todo) => {
	console.log(todo);
});
