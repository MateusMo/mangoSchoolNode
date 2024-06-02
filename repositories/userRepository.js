const { User } = require('../models');

const get = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const post = async (userData) => {
    const { email, password, name } = userData;
    try {
        const newUser = await User.create({ email, password, name });
        return true;
    } catch  {
        return false;
    }
}

const update = async (userData) => {
    try {
        const user = await findByEmail(userData.email);
        user.password = userData.password;
        const id = user.id;
        await User.destroy({ where: { id } });
        await post(userData);
        return true;
    } catch (error) {
        
    }
}

const put = async (req, res) => {
    const { id } = req.params;
    const { email, password, name } = req.body;
    try {
        const updatedUser = await User.update({ email, password, name }, { where: { id } });
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id } });
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const findByEmail = async (email) => {
    try {
        const user = await User.findOne({ where: { email } });
        return user;
    } catch (error) {
        console.error('Error finding user by email:', error);
        return null;
    }
}

module.exports = { get, post, put, deleteUser, getUsers,findByEmail,update };
