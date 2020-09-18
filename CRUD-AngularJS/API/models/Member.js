const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Member = schema(
    {
        MemberName: String,
        MemberBio: String,
        MemberAge: Number
    },
    {
        collation: 'Member'
    }
);

module.exports = mongoose.model('Member',Member);