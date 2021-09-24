import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends React.Component {
    static contextType = ThemeContext;
    render() {

        return<div>
            <div className="book-list" >
            <ul>
                <li>The ways of kings</li>
                <li>The name of wind</li>
                <li>The final empire</li>
            </ul>
            </div>
        </div>;
    }
}

export default BookList;