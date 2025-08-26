import express from "express";
import { addUser, loginUser } from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { authrize } from "../middleware/role.middleware.js";

const route = express.Router();

route.post('/addUser', addUser);
route.post('/loginUser', loginUser)


//proteion

route.get('/admin', protect, authrize(['admin']), (req, res) => {
    res.json('Welcome Admin')
})

route.get('/user', protect, authrize(['user', 'admin']), (req, res) => {
    res.json('Welcome User')
})
export default route