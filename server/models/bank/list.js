const mongoose = require('mongoose');
const Schema = mongoose.Schema

const listSchema = new Schema({
    projectId: String,
    title: String,
    description: String,
    externalTitle: String
})

module.exports = mongoose.model('List', listSchema)