const User = require('../models/User');
const bcrypt = require('bcryptjs');
const registrationController = {
    registerUser: async (req, res) => {
        try {
            const { username, password, email } = req.body;
            const hashedPassword = bcrypt.hashSync(password, 8);

            const newUser = await User.create({ username, password: hashedPassword, email });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = registrationController;
