import jwt from 'jsonwebtoken';

const generateToken =  (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_KEY, {
        expiresIn: "15d"
    });


    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // Prevent XSS attacks
        sameSite: "None", // CSRF protection
        secure: process.env.NODE_ENV === "production", // Secure cookie in production
    });

    // Log the cookie value to ensure it's set correctly
    // console.log("Cookie set:", res.getHeader('Set-Cookie'));
};

export default generateToken;
