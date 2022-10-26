import * as fs from "fs";
import * as path from "path";

//filtering array of files to return md files only
const extractingMdFiles = (files) => {
  const mdFiles = files.filter((file) => {
    return file.slice(-2) === "md";
  });
  return mdFiles;
};

const extractingLinks = (absoluteRoute, mdFiles) => {
  mdFiles.forEach((mdFile) => {
    const mdFileRoute = `${absoluteRoute}\\${mdFile}`;
    const contentOfMdFile = fs.readFileSync(mdFileRoute, "utf8");
    const regularExpression = /https:\/\/[a-zA-Z\.\/]+/gm;
    const links = contentOfMdFile.match(regularExpression);
    console.log(contentOfMdFile);
    return console.log(links);
  });
};

const mdLinks = (route, options) => {
  //fs.exitsSync checa que la ruta exista
  if (fs.existsSync(route)) {
    //convierte la ruta en absoluta
    const absoluteRoute = path.resolve(route);
    //readdirSync lee los archivos de la ruta absolute & save in files
    const files = fs.readdirSync(absoluteRoute); //contain all files
    const mdFiles = extractingMdFiles(files);
    extractingLinks(absoluteRoute, mdFiles);
    return extractingMdFiles(files);
  } else {
    return "esta ruta no existe";
  }
};

export default mdLinks;
