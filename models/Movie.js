const {Schema, model} = require("mongoose");

const movieSchema = new Schema(
    {
        title: String,
        year: Number,
        director: String,
        duration: Number,
        synopsis: String,
        image: String,
    },
    {
        timestamps: true
    }
);

const Movie = model("Movie", movieSchema);
module.exports = Movie;

