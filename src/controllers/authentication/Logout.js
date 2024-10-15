const Logout = async(req, res) => {
    const user = await req.body;
    console.log('logout user',  user);
    res.clearCookie('token', {maxAge:0}).send({success: true});
}

module.exports = Logout;