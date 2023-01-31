import React from 'react';
import Stars from './stars';
import Review from './review';

export default class Movie extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <Review/>
                <Stars name="One Star"/>
                <Stars name="Two Stars"/>
                <Stars name="Three Stars"/>
                <Stars name="Four Stars"/>
                <Stars name="Five Stars"/>
            </div>
        );
    }
};