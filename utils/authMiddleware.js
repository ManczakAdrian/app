const authMiddleware=(req,res,next)=>{
    if (req.session.login) {
        next();
    }
    else {
        res.status(401).send({ message: 'You are not autorized' });
    }
}
module.exports=authMiddleware;