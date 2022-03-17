const router = require('express').Router();
const model_ = require('../models/arrivingGuest.model');
const generateID = require('../helper/tools');

router.route('/all').get((req,res)=>{
    model_.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('error ! ' + err));
})


router.route('/:id').get((req,res)=>{
console.log("req arriving");

    model_.findOne({"idRSVP":req.params.id})
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('error ! ' + err));
})



router.route('/add').post((req,res)=>{
    console.log("req conf in arriving");
    console.log(req.body);

    const idArr =`${generateID.generateIDArriving()}`;

    
        const newData = new model_({
            id : idArr,
            idRSVP:req.body.idRSVP,
        });
    
        console.log("adding");
        console.log(newData);
    
        newData.save().then(()=>{
            res.json('Guest arrival added! id is',idArr);
        }).catch(err=>res.status(400).json('err!'+ err))
    })

module.exports = router;

