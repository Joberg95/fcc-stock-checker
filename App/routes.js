"use strict";

const express = require("express");
const router = express.Router();
// todo: add library controller
const Library = require("./Controllers/Library");
const ROOT = "/";
const API = "/api/stock-prices";
const library = new Library();

// GET Requests
router.get(ROOT, (req, res) => {
  res.render("index");
});
