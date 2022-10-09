const MongoClient = require('mongodb').MongoClient;
const state = {
    db: null
}

module.exports.connect = function (done) {
    const url = 'mongodb://localhost:27017'
    const dbname = 'Dcart'

    MongoClient.connect(url,(err,db) => {
        if (err) return done(err)
        state.db = db.db(dbname)
        done()
    })
}


module.exports.get=function(){
    return state.db
}