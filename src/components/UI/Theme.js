import { createTheme } from '@material-ui/core/styles'
import { green, grey, red } from '@material-ui/core/colors'

const rawTheme = createTheme({
    palette: {
        primary: {
            light: '#91eba5',
            main: '#2bc44d',
            dark: '#103b19',
        },
        secondary: {
            light: '#4ea9e6',
            main: '#194b8a',
            dark: '#1d3757',
        },

        warning: {
            main: '#ffc071',
            dark: '#ffb25e',
            100: '#c22b3c',
            400: '#800f1c',
        },
        error: {
            xLight: red[50],
            main: red[500],
            dark: red[700],
        },
        success: {
            xLight: green[50],
            main: green[500],
            dark: green[700],
        },
        black: {
            100: '#9c9a9a',
            300: '#787777',
            500: '#525252',
            600: '#3b3b3b',
            700: '#1f1f1f',
            800: '#0d0d0d',
            900: '#000000',
        },
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300, // Work Sans
        fontWeightRegular: 400, // Work Sans
        fontWeightMedium: 700, // Roboto Condensed
        fontFamilySecondary: "'Roboto Condensed', sans-serif",
    },
})

const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: rawTheme.typography.fontFamilySecondary,
    textTransform: 'uppercase',
}

const theme = {
    ...rawTheme,
    palette: {
        ...rawTheme.palette,
        background: {
            ...rawTheme.palette.background,
            default: rawTheme.palette.common.white,
            placeholder: grey[200],
        },
    },
    typography: {
        ...rawTheme.typography,
        fontHeader,
        h1: {
            ...rawTheme.typography.h1,
            ...fontHeader,
            letterSpacing: 0,
            fontSize: 60,
        },
        h2: {
            ...rawTheme.typography.h2,
            ...fontHeader,
            fontSize: 48,
        },
        h3: {
            ...rawTheme.typography.h3,
            ...fontHeader,
            fontSize: 42,
        },
        h4: {
            ...rawTheme.typography.h4,
            ...fontHeader,
            fontSize: 36,
        },
        h5: {
            ...rawTheme.typography.h5,
            fontSize: 20,
            fontWeight: rawTheme.typography.fontWeightLight,
        },
        h6: {
            ...rawTheme.typography.h6,
            ...fontHeader,
            fontSize: 18,
        },
        subtitle1: {
            ...rawTheme.typography.subtitle1,
            fontSize: 18,
        },
        body1: {
            ...rawTheme.typography.body2,
            fontWeight: rawTheme.typography.fontWeightRegular,
            fontSize: 16,
        },
        body2: {
            ...rawTheme.typography.body1,
            fontSize: 14,
        },
    },
}

export default theme
