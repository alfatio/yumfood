const { Vendor, Tag, VendorTag } = require('../models')
const db = require('../models')

class VendorController {

  static async getVendor(req,res){
    let tags = req.query.tags
    try {
      if(tags){
        const vendors = await Vendor.findAll(
          {
            include: [
              {
                model: Tag,
                where: {
                  name: tags
                },
                attributes: {
                  exclude: ['createdAt','updatedAt']
                }
              }
            ]
          }
        )
        res.status(200).json({ vendors })
      }else{
        const vendors = await Vendor.findAll()
        res.status(200).json({ vendors })
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" })
    }
  }

  static async postVendor(req,res){
    let obj = {
      name: req.body.name,
      logo: req.body.logo ?? ""
    },
    tags = req.body.tags
    try {
      const newVendor = await Vendor.create(obj)

      tags = tags.map(tag => {
        return {
          TagId: +tag,
          VendorId: newVendor.id
        }
      })

      const newTag = await VendorTag.bulkCreate(tags)
      res.status(201).json({ vendors: newVendor , tags: newTag})
    } catch (err) {
      console.log(err);
      if(err.message){
        res.status(400).json({ message: err.message })
      }else{
        res.status(500).json({ message: "internal server error" })
      }
    }
  }

  static async putVendor(req,res){
    let obj = {
      name: req.body.name,
      logo: req.body.logo ?? ""
    },
    tags = req.body.tags
    try {
      const vendor = await Vendor.update(obj,{
        where: {
          id: +req.params.vendorId
        },
        returning: true,
        plain: true
      })

      await VendorTag.destroy({
        where: {
          VendorId: +req.params.vendorId
        }
      })

      tags = tags.map(tag => {
        return {
          TagId: +tag,
          VendorId: +req.params.vendorId
        }
      })

      const newTag = await VendorTag.bulkCreate(tags)

      res.status(200).json({ status: 'ok', vendors: vendor, tags: newTag })
    } catch (err) {
      if(err.message){
        res.status(400).json({ message: err.message })
      }else{
        res.status(500).json({ message: "internal server error" })
      }
    }
  }

  static async deleteVendor(req,res){
    try {
      await Vendor.destroy({
        where:{
          id: req.params.vendorId
        }
      })
      res.status(200).json({ message: "ok" })
    } catch (err) {
      res.status(500).json({ message: "internal server error" })
    }
  }

}

module.exports = VendorController