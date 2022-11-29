export function MovieItem(props) {

    const item = props.item;
    const movieList = props.movieList;
    const handleMovieList = props.handleMovieList;
    var totalMinutes = props.totalMinutes;
    const handleTotal = props.setTotal;

    const addToWatchList = () => {
        handleMovieList([...movieList, item]);
        handleTotal(totalMinutes += item.movielength);
        // console.log(movieList);
    }


    const removeFromWatchList = () => {
        handleMovieList((movieList) =>
            movieList.filter((movie) =>  movie.title !== item.title)
      );
        handleTotal(totalMinutes -= item.movielength);
    }



    return (
        <div className = "MovieItem">
            <div className = "LeftRightPair">

                    <div className="MovieItemFlexLeft">
                        <h3>{item.title}</h3>

                    

                        <p>Release Date: {item.releasedate}</p>
                        <p>Movie Length: {item.movielength} minutes</p>
                        <p>Trilogy: {item.trilogy}</p>
                        <p>Type of Film: {item.filmtype}</p>
                        <p>Parental Rating: {item.parentalrating}</p>
                        <p>IMDB Rating: {item.imdbrating}</p>
                    </div>

                    <div className="MovieItemFlexRight">

                    <img src = {item.image} className = "moviePosterImage"></img>

                    </div>
            </div>

            


            {/* <button onClick={addToWatchList}>Add to Watched List</button> */}
            {/* {this.renderMovieButton()} */}

            {(() => {
                if (movieList.indexOf(item) < 0) {
                    return (
                        <button className="addToButton" onClick={addToWatchList}>Add to Watched List</button>
                )
                } else {
                    return (
                        <button className="removeButton" onClick={removeFromWatchList}>Remove from Watched List</button>
                )
                }
            })()}
        </div>
    );

}