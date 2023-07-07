const BookInstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

// Anzeige der Liste aller Buchinstanzen.
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Liste der Buchinstanzen");
});

// Detailseite für eine bestimmte Buchinstanz anzeigen.
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NICHT IMPLEMENTIERT: Detail der Buchinstanz: ${req.params.id}`);
});

// Anzeigen des Buchinstanzen-Erstellungsformulars bei GET.
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz erstellen GET");
});

// Behandlung des Buchinstanzen-Erstellens bei POST.
exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz erstellen POST");
});

// Anzeigen des Buchinstanzen-Löschformulars bei GET.
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz löschen GET");
});

// Behandlung des Buchinstanzen-Löschens bei POST.
exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz löschen POST");
});

// Anzeigen des Buchinstanzen-Aktualisierungsformulars bei GET.
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz aktualisieren GET");
});

// Behandlung der Buchinstanzen-Aktualisierung bei POST.
exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NICHT IMPLEMENTIERT: Buchinstanz aktualisieren POST");
});