const generateToken = require('../../utils/generateToken');

const createCookieToken = (req, res, next)=> {
    const user = req.body;
      const token =  generateToken(user);

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    })
    .send({success: true});
}

module.exports = createCookieToken