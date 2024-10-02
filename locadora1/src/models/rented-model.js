import db from "../config/db.js";

const rentedSchema = new db.Schema({
  rente_by: {
    type: db.Schema.Types.ObjectId,
    required:true,
    ref: "USER",
  },
  movie_rented: {
    type: db.Schema.Types.ObjectId,
    required: true,
    ref: "MOVIE",
  },
  rent_date: {
    type: Date,
    required: true,
  },
  return_date:{
    type: Date,
    required: true,
  }
});

const Rented = db.model("Agendamento", rentedSchema);

export default Rented;