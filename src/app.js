import express from "express";
import { port } from "./config/index.js";
import { appRoutes } from "./routers/routers.js";
import "./config/server.js";

const app = express();
app.use(express.json());

// --- routing ----
try {
  appRoutes(app);
} catch (error) {
  console.log(error);
}
// --- routing ----

app.listen(port, (err) => {
  if (err) console.log("server error :-", err);
  console.log(`server running on port number ${port}`);
});
