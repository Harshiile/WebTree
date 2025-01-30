import { loginController, signUpController } from "../controllers";

const { Router } = require("express");
const router = Router()

router.post('/login', loginController)
router.post('/signup', signUpController)

export default router