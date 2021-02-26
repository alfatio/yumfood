const { Tag } = require('../models')

class TagController {

  static async getTag(req,res) {
    try {
      const tags = await Tag.findAll()
      res.status(200).json({ tags })
    } catch (err) {
      res.status(500).json({ message: "internal server error" })
    }
  }

  static async postTag(req,res){
    let obj = {
      name: req.body.name
    }
    try {
      const tag = await Tag.create(obj)
      res.status(201).json({ tags: tag })
    } catch (err) {
      console.log(err);
      if(err.message){
        res.status(400).json({ message: err.message })
      }else{
        res.status(500).json({ message: "internal server error" })
      }
    }
  }

  static async putTag(req,res){
    let obj = {
      name: req.body.name
    }
    try {
      const tag = await Tag.update(obj,{
        where: {
          id: +req.params.tagId
        },
        returning: true,
        plain: true
      })
      res.status(200).json({ tags: tag[1] })
    } catch (err) {
      console.log(err);
      if(err.message){
        res.status(400).json({ message: err.message })
      }else{
        res.status(500).json({ message: "internal server error" })
      }
    }
  }

  static async deleteTag(req,res){
    try {
      await Tag.destroy({
        where: {
          id: +req.params.tagId
        }
      })
      res.status(200).json({ message: 'ok' })
    } catch (err) {
      res.status(500).json({ message: "internal server error" })
    }
  }
}

module.exports = TagController