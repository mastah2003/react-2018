import React from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";

import { LanguageProvider } from "./components/LanguageContext/LanguageContext";

import movies from "./movies2.json";

class App extends React.Component {
  state = {
    language: "pl",
    searchText: ""
  };

  setLanguage = language => {
    this.setState({
      language
    });
  };

  handleSearchInput = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  render() {
    const { language, searchText } = this.state;

    const searchTextLower = searchText.toLowerCase();
    const moviesFiltered = movies.filter(movie =>
      movie.title[language].toLowerCase().includes(searchTextLower)
    );

    return (
      <div>
        <LanguageProvider value={this.state.language}>
          <button onClick={() => this.setLanguage("pl")}>PL</button>
          <button onClick={() => this.setLanguage("en")}>EN</button>
          <div>
            Search: <input type="text" onChange={this.handleSearchInput} />
            <p>Found: {moviesFiltered.length}</p>
          </div>
          <Title title="Movies 2018" />
          {moviesFiltered.map(movie => (
            <Post
              key={movie.id}
              title={movie.title}
              image={movie.poster}
              text={movie.description}
              rating={movie.rating}
            />
          ))}
        </LanguageProvider>
      </div>
    );
  }
}

export default App;
