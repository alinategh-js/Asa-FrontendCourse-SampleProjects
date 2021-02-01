import React, { Component } from "react";
import FilterList from "../common/filterList";
import Loading from "../common/loading";
import { getMovies, getGenreList } from "../services/fakeService";
import Pagination from "../common/pagination";

class Movies extends Component {
  state = {
    movies: [],
    genreList: [],
    selectedGenere: { id: 0 },
    eachPageCount: 2,
    page: 1
  };

  

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: getMovies(),
        genreList: getGenreList(),
      });
    }, 1500);
  }

  handleSelect = (item) => {
    this.setState({
      selectedGenere: item,
      page: 1
    });
  }

  render() {
    const { movies, genreList, selectedGenere, eachPageCount , page} = this.state;

    var filteredList =
      selectedGenere && selectedGenere.name // if selectedGenere has id and name both
        ? movies.filter((x) => x.genre === selectedGenere.name)
        : movies; // else filteredList = movies
    const movieCount = filteredList.length;
    const pages = Math.ceil(movieCount/eachPageCount);

    filteredList = filteredList.slice((page-1)*eachPageCount , (page-1)*eachPageCount + eachPageCount);

    return (
      <>
        <div class="row m-2">
          <div className="col-3">
            <FilterList
              items={genreList}
              keyField="id"
              valueField="name"
              selectedItem={selectedGenere}
              onSelect={(item) => this.handleSelect(item)}
            />
          </div>
          <div className="col">
            {movies.length > 0 ? (
              <>
                <h3>There are {movieCount} movies</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Rate</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredList.map((movie, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{movie.title}</td>
                        <td>{movie.genre}</td>
                        <td>{movie.inStock}</td>
                        <td>{movie.rate}</td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination 
                  pages={pages}
                  currentPage={page}
                  onPageSelect={(page) => {
                    this.setState({
                      page: page
                    })
                  }}
                />
              </>
            ) : (
              <Loading />
            )}
          </div>
        </div>
        
      </>
    );
  }
}

export default Movies;
