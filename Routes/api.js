"use strict";

let expect = require("chai").expect;
let MongoClient = require("mongodb");

const CONNECTION_STRING = process.env.DB;

module.exports