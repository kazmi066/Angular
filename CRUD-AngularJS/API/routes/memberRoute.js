const express = require('express');
const app = express();
const routes = express.Router();
const Member = require('../models/Member');


/*
    Add new Members
*/

routes.route('/add').post((req,res)=>{
    let member = new Member(req.body);
    member.save()
    .then((member) => {
        res.status(200).json({message:'Member has been added successfully'});
    })
    .catch((err)=>{
        res.status(400).json({message:'Unable to save Data to the Database'});
    })
});


/*
    Show ALL Members
*/

routes.route('/').get((req,res)=>{
    Member.find((err,members)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(members);
        }
    })
});


/*
    Search the Members
*/

routes.route('/edit/:id').get((req,res)=>{
    let id = req.params.id;
    Member.findById(id,(err,member)=>{
        res.json(member);
    })
});


/*
    Update the Members
*/

routes.route('/update/:id').post((req,res)=>{
    Member.findById(req.params.id,(err,member)=>{
        if(!member){
            res.status(400).json({message:'Record not found'});
        }
        else{
            member.MemberName = req.body.MemberName;
            member.MemberBio = req.body.MemberBio;
            member.MemberAge = req.body.MemberAge;

            member.save()
            .then(member=>{
                res.json('Member Updated');
            })
            .catch(err=>{
                res.status(400).json({message:'Unable to Update the member'});
            })
        }
    })
});



/*
    Removing the Members
*/
routes.route('/delete/:id').get((req,res)=>{
    Member.findByIdAndRemove({_id: req.params.id},(err,member)=>{
        if(err) res.json(err);
        else res.json('Member Removed');
    })
});

module.exports = routes;
