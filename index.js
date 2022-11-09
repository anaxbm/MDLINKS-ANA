import mdLinks from "./utils.js";
mdLinks("./directory", {
  validate: false,
  stats: false,
})
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error));

mdLinks("./directory2", {
  validate: true,
  stats: false,
})
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error));
