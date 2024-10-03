import User from "../models/user-model.js";
import Movie from "../models/movie-model.js";

export const age = async (req, res, next) => {
    const user = await User.findById(req.body.rente_by).exec();
    const movie = await Movie.findById(req.body.movie_rented).exec();
    if (user && movie) {
        const calcularIdade = () => {
             var today = new Date();
             age = today.getFullYear() - user.nascimento.getFullYear();
        
           }
      if (user.age >= movie.classification) {
        res.status(200).send("Acesso permitido");
        next();
      } else {
        res.status(403).send("Idade não permitida para assistir ao filme");
      }
    } else {
      res.status(400).send();
    }
  };

  export default age