const router = require('express').Router();
const model_ = require('../models/arrivalConfirmation.model');
const generateIDRSVP = require('../helper/tools');

router.route('/').get((req,res)=>{
    model_.find()
    .then(users=>req.json('users'))
    .catch(err=>res.status(400).json('error ! ' + err));
})


router.route('/add').post((req,res)=>{
console.log("req conf");
console.log(req.body);

    const newData = new model_({
        id : `${generateIDRSVP}`,
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

