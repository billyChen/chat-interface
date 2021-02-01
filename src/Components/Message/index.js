import React from 'react'
import { format } from 'date-fns'

// Material-ui
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        minWidth: '100px',
        width: 'fit-content',
        borderRadius: '5px 5px 0 0',
        backgroundColor: '#f4f6f7',
        margin: '10px 0',
        fontFamily: 'Open Sans,sans-serif,Arial',
        padding: '10px 15px'
    },
    messageInfos: {
        fontSize: '0.7em',
        color: 'lightgray',
        marginTop: '10px'
    }
})

const Message = ({ message, isPublic, date }) => {

    const classes = useStyles()

    return (
        <Box className={classes.root} display="flex" flexDirection="column">
            {message}
            <Box className={classes.messageInfos} display="flex">
                {isPublic ? 'Public' : 'Privé'} - {format(date, 'dd/MM/yyyy', { timeZone: 'Europe/Paris' })}
            </Box>
        </Box>
    )
}

export default React.memo(Message)