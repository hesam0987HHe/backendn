const path = require('path')
const showRoomAvatarService = async (req, res) => {
    const roomId = req.params.roomId
    const avatarPicPath = path.join(__dirname, `../uploads/avatars/${roomId}.jpg`)
    res.sendFile(avatarPicPath)
}

module.exports = showRoomAvatarService;