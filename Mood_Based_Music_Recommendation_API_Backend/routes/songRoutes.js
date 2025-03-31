let express=require('express')
const { listSong, insertSong, updateSong, deleteSong } = require('../controllers/songController')
let songRoutes=express.Router()


songRoutes.get('/song-list/:mood',listSong)
songRoutes.post('/song-insert',insertSong)
songRoutes.put('/song-update/:id',updateSong)
songRoutes.delete('/song-delete/:id',deleteSong)


module.exports=songRoutes;