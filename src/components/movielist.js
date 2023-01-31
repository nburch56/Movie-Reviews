import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    render() {
        return (
            <ul className='list-group'>
                <li className='list-group-item'>Black Panther: Wakanda Forever<Movie/></li>
                <li className='list-group-item'>Avatar: The Way of Water<Movie/></li>
                <li className='list-group-item'>A Man Called Otto<Movie/></li>
            </ul>
        );
    }
};