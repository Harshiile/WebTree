import { sign, verify, JwtPayload } from 'jsonwebtoken'

export const generateToken = (payload: JwtPayload): string => {
    return sign(payload, process.env.JWT_SECRET || "")
}
export const verifyToken = (token: string): JwtPayload | string => {
    return verify(token, process.env.JWT_SECRET || "")
}

