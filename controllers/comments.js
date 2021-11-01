const Comments = require('../models/comments')
const News = require("../models/news")
const User = require("../models/user")

const addComments = async (req, res) => {
    const comment = new Comments(req.body)
    const savedComment = await comment.save()
    await News.findByIdAndUpdate(savedComment.news, {$push: {comments: savedComment._id}})
    const user = await User.findById(savedComment.user)


    res.json({...savedComment._doc, user})
}

module.exports = {addComments}