import e from "express";
import "dotenv/config";
import user_router from "./router/user-router.js";
import movie_router from "./router/movie-router.js";
import rented_router from "./router/rented-router.js";

const app = e();

app.use(e.json());

app.use("/user", user_router);
app.use("/movie", movie_router);
app.use("/rented", rented_router);

app.listen(process.env.API_PORT, () => console.log("Servidor executando na porta " + process.env.API_PORT));