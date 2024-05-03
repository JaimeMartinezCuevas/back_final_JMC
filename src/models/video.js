const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    title: String,
    link: String,
    artistName: String,
    genre: String,
    year: Number
});

//Modelo usando moongose
const Song = mongoose.model('Song', SongSchema)

//Añadilo a la base datos
const addSong = async (title, link, artistName, genre, year) => {
    const song = new Song({ title, link, artistName, genre, year })
    await song.save()
}

const getSongs = async () => {
    return await Song.find({}, '_id title link artistName genre year')
}

const deleteSong = async (id) => {
    return await Song.findByIdAndDelete(id)
}

const updateSong = async (id, title, link, artistName, genre, year) => {
    return await Song.findByIdAndUpdate(id, { title, link, artistName, genre, year })
}

const getSongById = async (id) => {
    return await Song.findById(id)
}

module.exports = { addSong, getSongs, deleteSong, updateSong, getSongById}