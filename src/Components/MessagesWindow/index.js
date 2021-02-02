import React from 'react'
import { useSelector } from 'react-redux'

//Material-ui
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// Components
import Message from '../Message'

// Selectors
import { getMessages } from '../../store/message/selectors'


const useStyles = makeStyles({
    root: {
        borderRadius: '5px',
        minHeight: '500px',
        minWidth: '850px',
        padding: '15px'
    }
})


const MessagesWindow = () => {
    const classes = useStyles()

    // Selectors
    const messages = useSelector(getMessages)

    const listMessages = () => {
        return messages.map((m, idx) => {
            return <Message key={`$list-message-${idx}`} message={m.message} isPublic={m.isPublic} date={m.date} />
        })
    }

    return (
        <Paper elevation={2}>
            <AppBar color="transparent" position="relative">
                <Toolbar>
                    <Typography variant="h5">Messagerie</Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.root} display="flex" flexDirection="column">
                {listMessages()}
            </Box>
        </Paper>
    )
}

export default MessagesWindow