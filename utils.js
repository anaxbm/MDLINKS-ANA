import * as fs from "fs";
import * as path from "path";
import fetch from "node-fetch";
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
    const regexToMatchURLName = /\[(.*?)\]/g;
    const urlName = contentOfMdFile.match(regexToMatchURLName);
    const regexToMatchLinks =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
    const links = contentOfMdFile.match(regexToMatchLinks);
    const finalLinks = links.map((link) => {
      return link.replace(/\)$/g, "");
    });

    return { file: mdFileRoute, text: urlName, links: finalLinks }; //array of objects
  });
  //console.log(arrayOfObjects);
  return arrayOfObjects; //array
};

const reorderData = (arrayOfLinksObjects) => {
  const linksArray = [];
  for (let i = 0; i < arrayOfLinksObjects.length; i++) {
    arrayOfLinksObjects[i].links.forEach((link, index) => {
      linksArray.push({
        href: link,
        text: arrayOfLinksObjects[i].text[index], //truncado a 50 caracteres
        file: arrayOfLinksObjects[i].file,
      });
    });
  }
  return linksArray;
};

const validateLinks = (links) => {
  const arrayPromise = links.map((linkObject) => {
    return fetch(linkObject.href);
  });

  return Promise.all(arrayPromise).then((response) => {
    const arrayOfValidObjects = links.map((link, index) => {
      return {
        href: link.href,
        text: link.text,
        file: link.file,
        status: response[index].status,
        ok: response[index].statusText,
      };
    });
    //console.log(arrayOfValidObjects);
    return arrayOfValidObjects;
  });
};

const mdLinks = (route, options) => {
  return new Promise((resolve, reject) => {
    //fs.exitsSync checa que la ruta exista
    if (fs.existsSync(route)) {
      //convierte la ruta en absoluta
      const absoluteRoute = path.resolve(route);
      //readdirSync lee los archivos de la ruta absolute & save in files
      const files = fs.readdirSync(absoluteRoute); //contain all files
      const mdFiles = extractingMdFiles(files);
      const arrayOfLinksObjects = extractingLinks(absoluteRoute, mdFiles);
      const links = reorderData(arrayOfLinksObjects);
      if (options.validate) {
        const linksOk = validateLinks(links);
        return resolve(linksOk);
      }
      return resolve(links);
    } else {
      return reject("esta ruta no existe");
    }
  });
};

export default mdLinks;
