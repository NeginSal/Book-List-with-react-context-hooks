import React, { Component } from 'react';

class BookList extends React.Component {
    render() {
        return <div className="book-list">
            <ul>
                <li>The ways of kings</li>
                <li>The name of wind</li>
                <li>The final empire</li>
            </ul>
        </div>;
    }
}

export default BookList;