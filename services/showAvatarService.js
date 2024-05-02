const path = require('path')
const showAvatarService = async (req, res) => {
    const userId = req.params.userId
    const avatarPicPath = path.join(__dirname, `../uploads/avatars/${userId}.jpg`)
    res.sendFile(avatarPicPath)
}

module.exports = showAvatarService;

