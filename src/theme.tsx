import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    }
  },
  typography: {
    fontFamily: '"M PLUS Rounded 1c", "sans-serif"'
  }
});

export default theme;
