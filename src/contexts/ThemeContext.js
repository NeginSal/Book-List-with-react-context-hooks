import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isLightTheme: true,
        light: {syntax: '#555', ui:'#ddd', bg:'#eee'},
        dark: {syntax: '#ddd', ui:'#333', bg:'#555'}
    }
    render() {
        return <div>
            <ThemeContextProvider value={{...this.state}}>
                {this.props.children}
            </ThemeContextProvider>
        </div>;
    }
}

export default ThemeContextProvider;
