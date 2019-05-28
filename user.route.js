const express=require('express');
const router=express.Router();
const User =require('/user.controller');
router.get('/test',user_controller.test);
module.exports=router;

router.put('/:id/update',user_controller.user_update);

router.delete('/:id/delete',user_controller.user_delete);