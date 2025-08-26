import { User } from "../models/user.model.js"
import { generateToken } from "../utils/generateToken.js";


export const addUser = async (req, res) => {
    try {
        const { userName, email, password, role } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({
                msg: "User Already exist"
            })
        }
        const user = await User.create({ userName, email, password, role });

        res.status(200).json({
            _id: user._id,
            userName: user.userName,
            email: user.email,
            role: user.role,
            token: generateToken(user)
        })
    } catch (error) {
        console.error(error)
    }
}


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && (await user.matchpassword(password))) {
            res.status(200).json({
                _id: user._id,
                userName: user.userName,
                email: user.email,
                role: user.role,
                token: generateToken(user),
            })
        } else {
            res.status(401).json({ message: "Invalid email or password" });
          }
    }
    catch (error) {
        console.error(error)
    }
}