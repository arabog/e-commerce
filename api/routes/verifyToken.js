const jwt = require("jsonwebtoken")


// verifyToken
const verifyToken = (req, res, next) => {
          const authHeader = req.headers.token

          if(authHeader) {
                    const token = authHeader.split(' ')

                    jwt.verify(token,
                              process.env.JWT_SEC,
                              
                              (err, user) => {
                                        if(err) {
                                                  res.status(403).json("Token is not valid!")
                                        }else {
                                                  req.user = user;

                                                  next();
                                        }
                              }
                    )
          }else {
                    return res.status(401).json("You are not authenticated")
          }
}

// login

module.exports = router