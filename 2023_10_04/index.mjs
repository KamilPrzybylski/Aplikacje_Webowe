import http from "http";
import { readFile } from "fs/promises";
import { writeFile } from "fs/promises";

const host = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.statusCode = 200;

    const html = await readFile("templates/index.html");
    res.setHeader("content-type", "text/html");
    res.write(html);
    res.end();
  } else if (url === "/dziekujemy") {
    res.statusCode = 200;

    const html_dzie = await readFile("templates/thanks.html");
    res.setHeader("content-type", "text/html");
    res.write(html_dzie);
    res.end();
  } else if (url === "/api") {
    res.statusCode = 200;

    const API = [
      {
        id: 1,
        name: "Kowalski",
      },
      {
        id: 2,
        name: "Przybylski",
      },
    ];

    res.setHeader("content-type", "application/json");
    res.write(JSON.stringify(API));
    res.end();
  } else if (url === "/kontakt" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk.toString());
      body.push(chunk);
    });

    req.on("end", async () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      await writeFile(`contact/message-${Date.now().toString()}.txt`, message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader("content-type", "application/json");
    res.write("Brak strony o podanym adresie");
    res.end();
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://`, host, `:`, port, `/`);
});
