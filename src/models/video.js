const mongoose = require('mongoose');

// Define the song schema
const SongSchema = new mongoose.Schema({
    title: String,
    link: String,
    artistName: String,
    genre: String,
    year: Number
});

// Create a Mongoose model from the song schema
const Song = mongoose.model('Song', SongSchema);

// Function to add a song to the database
const addSong = async (title, link, artistName, genre, year) => {
    const song = new Song({ title, link, artistName, genre, year });
    await song.save();
}

// Function to get all songs from the database
const getSongs = async () => {
    return await Song.find({}, '_id title link artistName genre year');
}

// Function to delete a song from the database
const deleteSong = async (id) => {
    return await Song.findByIdAndDelete(id);
}

// Function to update a song in the database
const updateSong = async (id, title, link, artistName, genre, year) => {
    return await Song.findByIdAndUpdate(id, { title, link, artistName, genre, year });
}

// Function to get a song by id from the database
const getSongById = async (id) => {
    return await Song.findById(id);
}

module.exports = { addSong, getSongs, deleteSong, updateSong, getSongById};