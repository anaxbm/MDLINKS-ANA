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
  const arrayOfObjects = mdFiles.map((mdFile) => {
    const mdFileRoute = `${absoluteRoute}\\${mdFile}`;
    const contentOfMdFile = fs.readFileSync(mdFileRoute, "utf8");
    const regexToMatchLinks =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
    const links = contentOfMdFile.match(regexToMatchLinks);
    return { file: mdFileRoute, links: links }; //array of objects
  });
  return arrayOfObjects; //array
};

const reorderData = (arrayOfLinksObjects) => {
  const linksArray = [];
  for (let i = 0; i < arrayOfLinksObjects.length; i++) {
    arrayOfLinksObjects[i].links.forEach((link) => {
      linksArray.push({
        href: link,
        text: "",
        file: arrayOfLinksObjects[i].file,
      });
    });
  }

  return linksArray;
};

const mdLinks = (route, options) => {
  //fs.exitsSync checa que la ruta exista
  if (fs.existsSync(route)) {
    //convierte la ruta en absoluta
    const absoluteRoute = path.resolve(route);
    //readdirSync lee los archivos de la ruta absolute & save in files
    const files = fs.readdirSync(absoluteRoute); //contain all files
    const mdFiles = extractingMdFiles(files);
    const arrayOfLinksObjects = extractingLinks(absoluteRoute, mdFiles);
    const links = reorderData(arrayOfLinksObjects);

    return links;
  } else {
    return "esta ruta no existe";
  }
};

export default mdLinks;
