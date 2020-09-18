let mongoose = require('mongoose');
let schema = mongoose.Schema;

let jobs = new schema({
    id: { type: String, unique: true },
    type: String,
    url: String,
    created_at: String,
    company: String,
    company_url: String,
    location: String,
    title:String,
    description:String, 
});

let jobSchema = mongoose.model('jobs',jobs);

module.exports = jobSchema;
