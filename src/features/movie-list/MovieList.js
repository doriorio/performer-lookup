import React from 'react';
import styles from './MovieList.module.css'
import { connect } from "react-redux";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


const mapStateToProps = (state) => {
    return {
        movies: state.movies || []
    }
};

const changeBackground = (evt) => {
    evt.target.style.background = '#2900F6';
    evt.target.style.color = '#FFFFFF';
}

const onMouseLeave = (evt) => {
    evt.target.style.background = '';
    evt.target.style.color = '';
}

const MovieList = (props) => {

    const movies = props.movies;

    return (
        <ListGroup className={styles.movieList}>
            {movies.length ? movies.map((movie) => 
                <ListGroupItem onMouseOver={changeBackground} onMouseLeave={onMouseLeave} className={styles.movieItem} key={movie}>{movie}</ListGroupItem>
                
            ) : <h4 style={{textAlign: 'center', color: 'white'}}>Search and select a person to see their movies</h4>}
        </ListGroup>
        )

}


export default connect(mapStateToProps, {})(MovieList);
