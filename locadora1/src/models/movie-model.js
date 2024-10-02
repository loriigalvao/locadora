import db from "../config/db.js";

const movieSchema = new db.Schema({
  nome: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  diretor: {
    type: String,
    required: true,
  },
  classification: {
    type: String,
    enum: ["L", "16", "18"],
    required: true,
  }
});

const Movie = db.model("Movie", movieSchema);

export default Movie;