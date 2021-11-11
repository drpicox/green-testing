const express = require("express");
const suitesStore = require("./suites-store");
const getSymbolParam = require("./get-symbol-param");
const w = require("./wrap");

const suites = express.Router();
suites.get(
  "/",
  w(async (req, res) => {
    res.json({
      result: await suitesStore.list()
    });
  })
);

suites.get(
  "/:suite",
  w(async (req, res) => {
    const suite = getSymbolParam(req, res, "suite");
    if (!suite) return;

    res.json({
      result: await suitesStore.get(suite)
    });
  })
);

module.exports = suites;
