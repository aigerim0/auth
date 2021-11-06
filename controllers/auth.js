const User = require('../models/user')
const jsonwebtoken = require("jsonwebtoken")
const {OAuth2Client} = require("google-auth-library")

const signup = (req, res) => {
    const {name, email, password} = req.body
    User.findOne({email}, (error, user) => {
        if (user) {

            return res.status(400).json({message: "Такой пользователь уже есть"})

        }
        const newUser = new User(req.body)
        newUser.save((error, user) => {
            if (error) {
                return res.status(400).json({message: "Ошибка сохронения "})
            }
            return res.json({message: "Пользователь успешно зарегистртрованаю Войдите!"})
        })
    })
}

const signin = (req, res) => {
    const {email, password} = req.body
    User.findOne({email}).exec(async (error, user) => {
        if (!user) {

            return res.status(400).json({message: " Пользователя не существует"})

        }
        if (!await user.authenticate(password)) {
            return res.status(401).json({message: "Неверный пароль!"})
        }
        const token = jsonwebtoken.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: "2d"})
        return res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })

    })

}


const authenticate = async (req, res) => {
    const token = req.header("auth-token")
    console.log(token)

    try {
        if (!token) {
            return res.status(401).json({message: "Токен не найден"})
        }
        const payload = jsonwebtoken.verify(token, process.env.SECRET_KEY)
        console.log(payload)
        const user = await User.findOne({_id: payload._id})
        res.json({
            token, user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (e) {
        console.log(666)
        return res.status(401).json({message: "Invalid token"})
    }

}


const getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate("news")

        res.json({
            _id: user._id,
            email: user.email,
            name: user.name,
            role: user.role,
            news: user.news
        })
    } catch (e) {
        return res.status(401).json({message: "Неудалось загрузить пользователя"})
    }
}


const client = new OAuth2Client("769849341124-p8ijladioa96ajl9fmf1jc5fm379orbi.apps.googleusercontent.com");
const googleLogin = (req, res) => {
    const {idToken} = req.body

    client.verifyIdToken({
        idToken,
        audience: "769849341124-p8ijladioa96ajl9fmf1jc5fm379orbi.apps.googleusercontent.com"
    })
        .then(response => {
            const {email_verified, name, email} = response.payload

            if (email_verified) {
                User.findOne({email}).exec((err, user) => {
                    if (user) {
                        const token = jsonwebtoken.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: "7d"})
                        const {_id, email, name, role} = user;
                        return res.json({
                            token,
                            user: {_id, email, name, role}
                        })
                    } else {
                        let password = email + process.env.SECRET_KEY
                        user = new User({name, email, password})
                        user.save((err, data) => {
                            if (err) {
                                console.log("ERROR GOOGLE LOGIN ON USER SAVE", err)
                                return res.status(400).json({
                                    error: "User signup failed with google"
                                })
                            }
                            const token = jsonwebtoken.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: "7d"})
                            const {_id, email, name, role} = data
                            return res.json({
                                token,
                                user: {_id, email, name, role}
                            })
                        })
                    }
                })

            } else {
                return res.status(400).json({
                    error: "Google login failed. Try again"
                })
            }
        })

}


module.exports = {
    signup,
    signin,
    authenticate,
    getUserInfo,
    googleLogin
}
