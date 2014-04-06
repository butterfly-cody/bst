var mongodb = require('./mgSettings');

var Schema = mongodb.mongoose.Schema;

var UnitSchema = new Schema({
    label           : String,
    pId             : String
});

var Unit = mongodb.mongoose.model("Unit", UnitSchema);

var UnitDAO = function(){};

UnitDAO.prototype.save = function(obj, callback) {
    var instance = new Unit(obj);
    instance.save(function(err){
        callback(err);
    });
};

UnitDAO.prototype.findUnitChildren = function(child, callback) {
    Unit.find({"pId":child},function(err,obj){
        callback(err,obj);
    });
};

module.exports = new UnitDAO();