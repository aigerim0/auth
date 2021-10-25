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

module.exports = {
    signup,
    signin
}
