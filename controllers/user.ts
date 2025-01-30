import { Request, Response } from "express";
import { User } from "../types/Request";
import { hash, compare } from 'bcrypt'
import { APIResponse } from "../types/Response";
import { generateToken } from "../utils/token";

const encryptPassword = async (password: string) => {
    return await hash(password, 10)
}
const decryptPassword = async (password: string) => {
    // return await compare(password);
}

export const loginController = async (req: Request<{}, {}, User>, res: Response<APIResponse>) => {
    const { email, password }: User = req.body

    const hashedPassword: string = await encryptPassword(password)
    const decryptPassword = "---"
    if (decryptPassword == hashedPassword) {
        // generate cookie
        res.json({
            statusCode: 200,
            message: "Login Successfully"
        })
    }
    else {
        res.json({
            statusCode: 401,
            message: "Password incorrect"
        })
    }
    /*
        1. decrypt password
        2. checks with given password
        3. if false => return with message
        4. if true => generate cookie & let user go : payload={userId,email}
    */
}
export const signUpController = async (req: Request<{}, {}, User>, res: Response<APIResponse>) => {
    const { email, password }: User = req.body
    const hashedPassword: string = await encryptPassword(password)
    // generate cookie
    res.json({
        statusCode: 200,
        message: "Signup Successfully"
    })
}