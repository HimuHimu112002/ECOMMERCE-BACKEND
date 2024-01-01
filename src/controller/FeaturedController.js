const FeaturesModel = require('../model/FeaturesModel')

async function CreateFeatured(req, res) {

    const {name,description,img} = req.body
    let featured = new FeaturesModel({
        name,
        description,
        img
    })   
    featured.save()
    res.send({success: "featured create Successfully"})
    
}

async function GetAllFeaturedList(req, res) {
    let data = await FeaturesModel.find({})
    res.send(data)
    
}

module.exports = {CreateFeatured,GetAllFeaturedList}