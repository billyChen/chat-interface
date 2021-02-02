import React from 'react'

import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

// Components
import MessagesWindow from '../MessagesWindow'
import TypingField from '../TypingField'

const useStyles = makeStyles({
    root: {
        margin: 'auto',
    }
})

const Chat = () => {

    const classes = useStyles()

    return (
        <Box className={classes.root} display="flex" flexDirection="column">
            <MessagesWindow />
            <TypingField />
        </Box>
    )
}

export default Chat