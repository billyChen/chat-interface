import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'

// Material-ui
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

// Actions
import { addMessage } from '../../store/message/reducers'


const useStyles = makeStyles({
    root: {

    },
    inputText: {
        width: '80%',
        marginTop: '15px'
    },
    button: {
        height: '50%',
        marginLeft: '15px',
        fontWeight: '600'
    },
    isDisabled: {
        color: '#cad1d9',
        pointerEvents: 'none',
        cursor: 'not-allowed',
        backgroundColor: '#f4f6f7',
    }
})

const TypingField = () => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const [message, setMessage] = useState('')
    const [isPublic, setIsPublic] = useState('public')

    const handleTextChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSendMessage = () => {
        dispatch(addMessage({ message, isPublic }))
        setMessage('')
    }

    const handleSetVisibility = () => {
        setIsPublic(!isPublic)
    }

    return (
        <Box display="flex" alignItems="baseline">
            <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-message">Votre message</InputLabel>
                <OutlinedInput
                    data-testid="input-message"
                    id="outlined-adornment-message"
                    onChange={handleTextChange}
                    className={classes.inputText}
                    label="Search field"
                    type="search"
                    variant="outlined"
                    value={message}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={handleSetVisibility} edge="end">
                                {isPublic ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button id="submit-button" onClick={handleSendMessage} className={clsx(classes.button, {
                [classes.isDisabled]: message.length === 0
            })} variant="contained">Envoyer</Button>
        </Box >
    )
}

export default TypingField