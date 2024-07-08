// utils/jwt.js
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;
console.log('SECRET_KEY:', SECRET_KEY);

export const generateToken = (userInfo) => {
    return jwt.sign(userInfo, SECRET_KEY, { expiresIn: '1h' });
};