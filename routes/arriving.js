const router = require('express').Router();
const model_ = require('../models/arrivingGuest.model');
const generateID = require('../helper/tools');

router.route('/all').get((req,res)=>{
    model_.find()
    .then(users=>req.json('users'))
    .catch(err=>res.status(400).json('error ! ' + err));
})


router.route('/:id').get((req,res)=>{
console.log("req arriving");

    const newData = new model_({
        id : `${generateID}`,
        idRSVP:req.params.id,
    });

    console.log("adding");
    console.log(newData);
    
    newData.save().then(()=>{
        res.json('arrival added!')
    }).catch(err=>res.status(400).json('err!'+ err))
})

module.exports = router;

