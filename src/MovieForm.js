import React from 'react'

class MovieForm extends React.Component{
    state = {
        title: "",
        imgURL: ""
    }

    onSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:3000/movies', config)
        .then(res => res.json())
        .then(data => this.props.addMovieToState(data))
        this.clearForm()
    }

    clearForm = () => {
        this.setState({
            title: "",
            imgURL: ""
        })
    }

    onChange = (e) => {
        let obj = {}
        obj[e.target.id] = e.target.value
        this.setState(obj)
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label id="title">Title: </label>
                <input onChange={this.onChange} type="text" id="title" value={this.state.title}/>
                <br/>
                <label id="imgURL">Image URL: </label>
                <input onChange={this.onChange} type="text" id="imgURL" value={this.state.imgURL}/>
                <br/>
                <input type="submit" value="Add Movie"/>
            </form>
        )
    }
}

export default MovieForm;