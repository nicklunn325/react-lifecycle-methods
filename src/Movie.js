import React from 'react'

class Movie extends React.Component{
   shouldComponentUpdate = (nextProps, nextState) => {
       console.log("Hello World")
       debugger;
       if(this.props === nextProps){
           return false
       } else {
           return true
       }
   }
    render(){
        console.log("hello world render")
        return(
            <div id={this.props.id}>
                <h3>{this.props.title}</h3>
                <img alt={this.props.id} src={this.props.imgURL}/>
            </div>
        )
    }
}

export default Movie;