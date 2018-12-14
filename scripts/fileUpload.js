const multer = require('multer')
const imageFolder = './client/public/images/dp'

module.exports = {
    single: function({ name }) {
        const storage = multer.diskStorage({
            destination: imageFolder,
            filename: function(req, file, cb) {
                cb(null, `${Date.now()}-${file.originalname}`)
            }
        })

        const upload = multer({
            storage: storage,
            limits: { fileSize: 1e8 }
        }).single(name)

        return upload
    }
}
