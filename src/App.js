import Box from '@material-ui/core/Box'


// Components
import Chat from './Components/Chat'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
  }
})

function App() {
  const classes = useStyles()

  return (
    <Box className={classes.root} display="flex" flexDirection="column">
      <Chat />
    </Box>
  );
}

export default App;
