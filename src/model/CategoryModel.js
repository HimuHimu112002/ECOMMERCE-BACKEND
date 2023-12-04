const mongoose = require('mongoose');
const DataShema = mongoose.Schema({
    categoryName:{
        type: String,
        unique: true,
        required: true,
    },
    categoryImg:{
        type: String,
        required: true,
    }
},
{timestamps: true, versionKey: false}
);
const CategoryModel = mongoose.model('category', DataShema);
module.exports = CategoryModel