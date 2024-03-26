const User = require('../models/User');
const bcrypt = require('bcryptjs');
const loginController = {
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ where: { username } });

            if (user && bcrypt.compareSync(password, user.password)) {
                // Handle session or token creation here
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = loginController;
