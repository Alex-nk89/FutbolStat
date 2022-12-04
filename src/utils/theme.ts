import { createTheme } from '@mui/material'

const theme = () => createTheme({
    palette: {
     mode: 'dark'
    },
    typography: {
        fontFamily: ['Poppins', 'Public Sans', 'Inter', 'Roboto'].join(','),
        fontSize: 14
    }
})

export default theme;