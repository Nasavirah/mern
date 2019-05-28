const User=require('/user.model');
exports.test=function(req,res){
    res.send('test done!');
};

exports.user_create=function(req,res){
    let user=new User(
        {
            name:req.body.name,
            contact:req.body.contact,
            email:req.body.email,
            image:req.body.iamge

    });
    user.save(function(err){
        if(err){
            return next(err);
        }res.send('user created successfully');
    })
};
exports.user_details=function(req,res){
    User.findId(req.params.id,function(err,user){
        if(err)return next(err);
        res.send(User);

    })
};

exports.user_update=function(req,res){
    User.findIdAndUpdate(req.params.id,{$set:req.body},function(err,user){
        if(err)return next(err);
        res.send('User updated');

    })
};

exports.user_delete=function(req,res){
    User.findIdAndRemove(req.params.id,function(err,user){
        if(err)return next(err);
        res.send('User Deleted');

    })
};

