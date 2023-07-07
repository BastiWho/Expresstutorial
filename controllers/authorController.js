const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

// Anzeigen der Liste aller Autoren.
exports.author_list = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autorenliste");
});

// Detailseite für einen bestimmten Autor anzeigen.
exports.author_detail = asyncHandler(async (req, res, next) => {
  res.send(`NICHT IMPLEMENTIERT: Autorendetails: ${req.params.id}`);
});

// Anzeigen des Autoren-Erstellungsformulars bei GET.
exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor erstellen GET");
});

// Behandlung des Autoren-Erstellens bei POST.
exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor erstellen POST");
});

// Anzeigen des Autoren-Löschformulars bei GET.
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor löschen GET");
});

// Behandlung des Autoren-Löschens bei POST.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor löschen POST");
});

// Anzeigen des Autoren-Aktualisierungsformulars bei GET.
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor aktualisieren GET");
});

// Behandlung des Autoren-Aktualisierens bei POST.
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Autor aktualisieren POST");
});