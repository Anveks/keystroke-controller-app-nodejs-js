import express from "express";
import appConfig from "./4-utils/app-config";
import routes from "./6-routes/app-routes"
import path from "path";

const server = express();

// setting the ejs
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use("/api", routes);
server.listen(appConfig.port, () => console.log("Listening on http://localhost:" + appConfig.port));