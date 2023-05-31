// Core
import { createContext } from 'react';

export const themes = {
    blue: {
        color: 'blue',
        background: '#fff'
    },
    yellow: {
        color: 'yellow',
        background: '#fff'
    }
}

export const ThemeContext = createContext(undefined);
