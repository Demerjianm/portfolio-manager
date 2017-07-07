const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userInfo = new Schema({
  name: { type: String },
  age: { type: Number },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('userInfo', userInfo)
