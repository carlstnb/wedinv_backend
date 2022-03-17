const router = require('express').Router();
const model_ = require('../models/invitedList.model');
const generateID = require('../helper/tools');

router.route('/all').get((req,res)=>{

    console.log("getting all");
    model_.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('error ! ' + err));
})


router.route('/:id').get((req,res)=>{

    console.log('id :' + req.params.id);

    model_.findOne({"idGuest":req.params.id})
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('error ! ' + err));
})


router.route('/add').post((req,res)=>{
    console.log("req conf");
    console.log(req.body);
    
        const newData = new model_({
            id : `${generateID.generateIDArriving()}`,
            idGuest:req.body.idGuest,
        });
        
        console.log(generateID.generateIDArriving());
      
    
        console.log("adding");
        console.log(newData);
    
        newData.save().then(()=>{
            res.json('Guest arrival added!')
        }).catch(err=>res.status(400).json('err!'+ err))
        
    })


module.exports = router;

