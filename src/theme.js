import {orange, blue, red} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: orange[700],
            contrastText: '#fff'
        },

        secondary:{
            main: blue[700]
        },
        warning:{
            main: red[500]
        }
    }
})

export default theme;