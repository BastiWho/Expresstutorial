const { body, validationResult } = require("express-validator");
const Book = require("../models/book");
const Genre = require("../models/genre");
const asyncHandler = require("express-async-handler");

// Display list of all genres.
exports.genre_list = asyncHandler(async (req, res, next) => {
  const allGenres = await Genre.find().sort({ name: 1 }).exec();
  res.render("genre_list", {
    title: "Genre Liste",
    genre_list: allGenres,
  });
});

// Detailseite für ein bestimmtes Genre anzeigen.
exports.genre_detail = asyncHandler(async (req, res, next) => {
  // Details des Genres und aller zugehörigen Bücher (parallel) abrufen
  const [genre, booksInGenre] = await Promise.all([
    Genre.findById(req.params.id).exec(),
    Book.find({ genre: req.params.id }, "title summary").exec(),
  ]);
  if (genre === null) {
    // Keine Ergebnisse.
    const err = new Error("Genre nicht gefunden");
    err.status = 404;
    return next(err);
  }

  res.render("genre_detail", {
    title: "Genre Detail",
    genre: genre,
    genre_books: booksInGenre,
  });
});



// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};


// Handle Genre create on POST.
exports.genre_create_post = [
  // Validate and sanitize the name field.
  body("name", "Genre name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data.
    const genre = new Genre({ name: req.body.name });

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.render("genre_form", {
        title: "Create Genre",
        genre: genre,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.
      // Check if Genre with same name already exists.
      const genreExists = await Genre.findOne({ name: req.body.name }).exec();
      if (genreExists) {
        // Genre exists, redirect to its detail page.
        res.redirect(genreExists.url);
      } else {
        await genre.save();
        // New genre saved. Redirect to genre detail page.
        res.redirect(genre.url);
      }
    }
  }),
];


// Display genre delete form on GET.
exports.genre_delete_get = asyncHandler(async (req, res, next) => {
  const genre = await Genre.findById(req.params.id).exec();

  if (genre === null) {
    // No results.
    res.redirect("/catalog/genres");
    return;
  }

  res.render("genre_delete", {
    title: "Delete Genre",
    genre: genre,
  });
});

// Handle genre delete on POST.
exports.genre_delete_post = asyncHandler(async (req, res, next) => {
  const genre = await Genre.findById(req.params.id).exec();

  if (genre === null) {
    // No results.
    res.redirect("/catalog/genres");
    return;
  }

  // Genre has associated books. Render in the same way as for GET route.
  if (genre.books && genre.books.length > 0) {
    res.render("genre_delete", {
      title: "Delete Genre",
      genre: genre,
    });
    return;
  } else {
    // Genre has no associated books. Delete the genre object and redirect to the list of genres.
    await Genre.findByIdAndRemove(req.body.genreid);
    res.redirect("/catalog/genres");
  }
});


// Display Genre update form on GET.
exports.genre_update_get = asyncHandler(async (req, res, next) => {
  const genre = await Genre.findById(req.params.id).exec();

  if (genre === null) {
    // No results.
    res.redirect("/catalog/genres");
    return;
  }

  res.render("genre_update", {
    title: "Update Genre",
    genre: genre,
  });
});

// Handle Genre update on POST.
exports.genre_update_post = asyncHandler(async (req, res, next) => {
  const genre = await Genre.findById(req.params.id).exec();

  if (genre === null) {
    // No results.
    res.redirect("/catalog/genres");
    return;
  }

  // Update the genre object with the new data and redirect to the genre detail page.
  genre.name = req.body.name;
  genre.description = req.body.description;

  await genre.save();

  res.redirect(genre.url);
});