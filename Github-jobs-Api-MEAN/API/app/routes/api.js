let express = require('express');
let jobSchema = require('../schema/jobs');
let router = express.Router();
let axios = require('axios');


router.get('/',(req, res)=>{
    res.send('asdas');   
});

router.get('/showjobs',(req,res)=>{

    let arr = [];    
    axios.get('https://jobs.github.com/positions.json')
    .then(response=>{
        for(let i=0 ; i<response.data.length ; i++){
            arr.push(response.data[i]);
            // arr[i].description = arr[i].description.replace(/<\/?[^>]+(>|$)/g, "");
            // arr[i].how_to_apply = arr[i].how_to_apply.replace(/<\/?[^>]+(>|$)/g, "");
        }
        

        // Query to Insert Data from API into Database as /showjobs is clicked
        jobSchema.collection.insert(arr, err =>{
            if(err){
                console.log('Error inserting data');
            }
            console.log('Data Successfully inserted');
        })
        // Query ends

    })
    .catch(error=>{
        console.log(error);
    })

    
    // Show the Documents
    jobSchema.find((err,jobs)=>{
        if(err){
            res.json({message:"Error fetching data"});
        }
        res.json(jobs);
    })
    // Show Done

});


router.post('/search',(req,res)=>{
    
    // Show the Documents

    const query = {
        description: {
            $regex: req.body.query,
            $options: 'i'
        }
    };
    
    jobSchema.find(query, function(err, jobs){
        if(err){
            res.json({message:"Error fetching data"});
        }
        return res.json(jobs);
      })

    // Show Done

});

router.post('/details',(req,res)=>{
    
    // Show the Documents

    const query = {};
    query[`${req.body.id}`] = { $exists: true };

    console.log(req.body);
    
    jobSchema.findOne({ id: req.body.query}, function(err, jobs){
        if(err){
            res.json({message:"Error fetching data"});
        }
        // console.log("jobs"+jobs);
        return res.json(jobs);
      })

});




module.exports = router;
