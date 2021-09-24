import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends React.Component {
    static contextType = ThemeContext;
    render() {
        const{ isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark ;
        return<div>
            <div className="book-list" style={{background:theme.bg, color:theme.syntax}}>
            <ul>
                <li style={{background:theme.ui, color:theme.syntax}} >The ways of kings</li>
                <li style={{background:theme.ui, color:theme.syntax}} >The name of wind</li>
                <li style={{background:theme.ui, color:theme.syntax}} >The final empire</li>
            </ul>
            </div>
        </div>;
    }
}

export default BookList;