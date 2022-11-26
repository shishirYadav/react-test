import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';
class Movie extends Component {

    render()
    {
        
        return(
           <div>
            <MovieList movies={this.props.movies} />
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      movies : state.movies
    }
  }

export default connect(mapStateToProps)(Movie)