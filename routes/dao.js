var Unit = require('./../models/Unit.js');

exports.doUnitSave = function (req, res){
    var units = req.body.treeData;
    doSave(units);
    function doSave(units) {
        for(var i=0; i<units.length; i++){
            var al=units[i];
            Unit.save({"label":al.label,"pId":0}, function(err){
                if(err) {
                    res.send({'success':false,'err':err});
                } else {
                    res.send({'success':true});
                }
            });
            if(al.children.length>0){
                doSave(al.children);
            }
        }
    }
}

exports.getUnitChildren = function(req, res){
    var child = req.body.child;
    Unit.findUnitChildren(child, function(err,obj){
        if(err) {
            res.send({'success':false,'err':err});
        } else {
            var dd= obj[0].label;
            res.send(obj);
        }
    });
}
