import React from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";

import { LanguageProvider } from "./components/LanguageContext/LanguageContext";

import movies from "./movies2.json";

const moviesGood = movies.filter(movie => movie.rating > 6);
const moviesBad = movies.filter(movie => movie.rating <= 6);

const moviesList = moviesArray =>
  moviesArray.map(movie => (
    <Post
      key={movie.id}
      title={movie.title}
      image={movie.poster}
      text={movie.description}
      rating={movie.rating}
    />
  ));

const App = () => (
  <div>
    <LanguageProvider value="en">
      <Title title="Good movies 2018" />
      {moviesList(moviesGood)}
    </LanguageProvider>
    <LanguageProvider value="pl">
      <Title title="Bad movies 2018" />
      {moviesList(moviesBad)}
    </LanguageProvider>
  </div>
);

export default App;
