const User = require('../model/user');

async function handleGetAllUsers(req, res) {
    const allDbUser = await User.find({});
    res.json(allDbUser);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    // Instead of hardcoding "Naiiiim", update with req.body fields:
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.json({ message: 'User updated successfully', user: updatedUser });
}

async function handleDeleteUserById(req, res) {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.json({ message: 'User deleted successfully' });
}

async function handleCreateUser(req, res) {
    try {
        const newUser = await User.create(req.body);
        console.log('✅ User created:', newUser);
        return res.status(201).json({
            message: 'User created successfully',
            user: newUser
        });
    } catch (err) {
        console.error('❌ Error creating user:', err);
        // Handle duplicate email error (unique constraint)
        if (err.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        return res.status(500).json({ message: 'Failed to create user' });
    }
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
};
