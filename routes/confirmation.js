const router = require('express').Router();
const model_ = require('../models/arrivalConfirmation.model');
const generateID = require('../helper/tools');

router.route('/').get((req,res)=>{
    model_.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('error ! ' + err));
})

router.route('/:id').get((req,res)=>{
    console.log(req.params.id);
    model_.findOne({"idGuest":req.params.id})
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('error ! ' + err));
})


router.route('/add').post((req,res)=>{
console.log("req conf add");
console.log(req.body);

    const newData = new model_({
        id : `${generateID.generateIDRSVP()}`,
        idGuest:req.body.idGuest,
        willArrived:Boolean(req.body.willArrived),
        numberOfExtras:parseInt(req.body.numberOfExtras),
        msg:req.body.msg,
    });

    console.log("adding" + req.body.willArrived);
    console.log(newData);

    newData.save().then(()=>{
        res.json('RSVP added!')
    }).catch(err=>res.status(400).json('err!'+ err))
})

router.route('/:id').delete((req,res)=>{

    console.log("deleting ", req.params.id);

    model_.deleteOne({"id":req.params.id})
    .then(()=>{
                res.json('succesfully deleted!')
    }).catch(err=>res.status(400).json('err!'+ err))
})


module.exports = router;

