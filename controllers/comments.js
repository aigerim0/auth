const Comments = require('../models/comments')
const News =  require("../models/news")
const addComments = async (req, res) => {
    const comment = new Comments(req.body)
    const savedComment = await comment.save()
    await  News.findByIdAndUpdate(savedComment.news, {$push:{comments: savedComment._id}})
    console.log(req.body)
    res.json(savedComment)
}

module.exports = {addComments}