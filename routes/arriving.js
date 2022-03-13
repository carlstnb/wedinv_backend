const router = require('express').Router();
const model_ = require('../models/arrivingGuest.model');
const generateID = require('../helper/tools');

router.route('/').get((req,res)=>{
    model_.find()
    .then(users=>req.json('users'))
    .catch(err=>res.status(400).json('error ! ' + err));
})


router.route('/add').post((req,res)=>{
console.log("req arriving");
console.log(req.body);

    const newData = new model_({
        id : `${generateID}`,
        idGuest:req.body.idGuest,
        idRSVP:req.body.idRSVP,
    });

    console.log("adding");
    console.log(newData);
    
    newData.save().then(()=>{
        res.json('arrival added!')
    }).catch(err=>res.status(400).json('err!'+ err))
})

module.exports = router;

