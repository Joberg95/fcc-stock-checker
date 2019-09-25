"use strict";

const express = require("express");
const cors = require("cors");
const routes = require("routes");
const app = express();
const helmet = require("helmet");
const pug = require("pug");

const PORT = process.env.PORT || 3000;

//  todo: Cookies
// expect(req).to.have.cookie('session_id');
// expect(req).to.have.cookie('session_id', '1234');
// expect(req).to.not.have.cookie('PHPSESSID');
// expect(res).to.have.cookie('session_id');
// expect(res).to.have.cookie('session_id', '1234');
// expect(res).to.not.have.cookie('PHPSESSID');

app.set("view engine", "pug");
app.set("views", "./App/Views/");
app.use("/assets", express.static("App/Views/Assets"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  helmet({
    noCache: true,
    hidePoweredBy: { setTo: "PHP 4.2.0" },
    xssFilter: true,
    directives: { defaultSrc: ["'self"] }
  })
);
// fccTesting(app);

// 404 no middleware
app.use((req, res, next) => {
  res
    .status(404)
    .type("text")
    .send("Not Found");
});

// start server & Tests for FCC
// TODO: Add tests for fcc
app.listen(PORT, () => {
  const GREEN_BG = "\x1b[42m\x1b[30m";
  const RED_TEXT = "\x1b[31m";
  const RESET = "\x1b[0m";
  console.log(`${GREEN_BG}%s${RESET}`, `:: Listening on port ${PORT} :: `);
  if (process.env.NODE_ENV === "test") {
    console.log(`${RED_TEXT}%s${RESET}`, `running tests`);
    setTimeout(() => {
      try {
        requestAnimationFrame.run();
      } catch (error) {
        console.log(`Tests invalid ${error}`);
      }
    }, 1500);
  }
});

module.exports = app; // test related.
