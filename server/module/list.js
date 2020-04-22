const mongoose = require('mongoose');
const db = require('./database');

const { Schema } = mongoose;

const listSchema = new Schema({
    id: String,
    title: String,
    desc: String,
    preview: String,
});

const ListModel = mongoose.model('list', listSchema);

module.exports = ListModel;