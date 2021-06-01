import React from 'react'
import MovieForm from "./MovieForm.js"
import Movie from "./Movie.js"

class Movies extends React.Component{
    // constructor(props){
    //     super(props)
    //     console.log(this, "constructor", this.state, this.props)
    //     this.state = {
    //         movies: []
    //     }
    // }

    state = {
        movies: []
    }

    // static getDerivedStateFromProps = (props, state) => {
    //     console.log(this, "getDerivedState", state, props)
    //     return state
    // }

    // shouldComponentUpdate = (nextProps, nextState) => {
    //     console.log(this, "shouldComponentUpdate", this.state, this.props)

    //     return true
    // }

    render = () => {
        // console.log(this, "render", this.state, this.props)
        return(
            <div>
                <h2>Movies</h2>
                <MovieForm addMovieToState={this.addMovieToState}/>
                {this.renderMovies()}
            </div>
        )
    }

    addMovieToState = (movie) => {
        this.setState({
            movies: [...this.state.movies, movie]
        })
    }
    // getSnapshotBeforeUpdate = (prevProps, prevState) => {
    //     console.log(this, "snapshot", this.state, this.props)
    //     return "Hello World";
    // }

    renderMovies = () => {
        return this.state.movies.map(movie => <Movie title={movie.title} imgURL={movie.imgURL} id={movie.id}/>)
    }

    componentDidMount = () => {
        // console.log(this, "componentDidMount", this.state,  this.props)
        // WHERE WE MAKE FETCH REQUESTS
        fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then(movieData => {
            this.setState({
                movies: movieData
            })
        })
    }

    // componentDidUpdate = (prevProps, prevState, snapshot) => {
    //     console.log(this, "componentDidUpdate", this.state, this.props, snapshot)
    // }

    // componentWillUnmount = () => {
    //     console.log(this, "unmount", this.state, this.props)

    //     // END ANY RUNNING PROCESSES 
    //         // STOP TIMEOUTS OR TIMERS
    //         // REPEATED FETCHES/ SUBSCRIPTIONS
    // }
    
}

export default Movies;