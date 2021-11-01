const User = require('../models/user')
const jsonwebtoken = require("jsonwebtoken")

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
    const token = req.body.token
    try {
        if (!token) {
            return res.status(401).json({message: "Токен не найден"})
        }
        const payload = jsonwebtoken.verify(req.body.token, process.env.SECRET_KEY)
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

module.exports = {
    signup,
    signin,
    authenticate,
    getUserInfo
}
