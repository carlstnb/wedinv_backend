const router = require('express').Router();
const guest = require('../models/guestlist.model');
const generateID = require('../helper/tools');

router.route('/').get((req,res)=>{
    guest.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('error ! ' + err));
})

router.route('/:id').get((req,res)=>{
    console.log(req.params.id);
    guest.findOne({"id":req.params.id})
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('error ! ' + err));
})


router.route('/add').post((req,res)=>{
console.log("req b ");
console.log(req.body);

    const newGuest = new guest({
        id : `${generateID.generateID()}`,
        name:req.body.name,
        relationSide:parseInt(req.body.relationSide),
        isAFamily:Boolean(req.body.isAFamily),
        expectedExtras:parseInt(req.body.expectedExtras),
    });

    console.log("adding");
    console.log(newGuest);
    

    newGuest.save().then(()=>{
        res.json('guest added!')
    }).catch(err=>res.status(400).json('err!'+ err))

})


router.route('/:id').delete((req,res)=>{

    console.log("deleting ", req.params.id);

    guest.deleteOne({"id":req.params.id})
    .then(()=>{
                res.json('succesfully deleted!')
    }).catch(err=>res.status(400).json('err!'+ err))
})

router.route('/update').post((req,res)=>{
    console.log('updating');
    console.log(req.body);

    guest.updateOne({id:req.body.id},req.body)
    .then(()=>{
                res.json('succesfully updated!')
    }).catch(err=>res.status(400).json('err!'+ err))

})



module.exports = router;

