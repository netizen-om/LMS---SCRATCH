import jwt from "jsonwebtoken"; 

export const generateToken = (req, res, message) => {
    const token = jwt.sign({"userId" : user._id}, process.env.SECRET_KEY, {
        expiresIn : "1d"
    })
    
    return res
    .status(200)
    .cookie("token", token, {
        httpOnly : true,
        sameSite : "strict",
        maxAge : 1000 * 60 * 60 * 24 // 1 day
    })
}