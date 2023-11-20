import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';

const signUp = async (req, res) => {

    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        console.error("Internal server error:", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const login = async (req, res) => {

    const { username, password } = req.body;
    const jwtSecret = process.env.JWT_SECRET;
    
    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        
        if (validPassword) {
            const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
            res.status(200).json({ token });
        } else {
            res.status(401).json({ error: 'Invalid password' });
        }
    } catch (error) {
        console.error("Internal server error:", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { signUp, login };
