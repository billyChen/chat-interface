import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import TypingField from '.'
import { render, fireEvent, screen } from '../../store/test-utils'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

// Component
import Message from './index'

describe('Message component', () => {

    it('should display the component', () => {
        let component = render(<Message isPublic={true} date={new Date()} />)
        expect(component).toMatchSnapshot()
    })

    it('should display "Prive"', () => {
        render(<Message isPublic={false} date={new Date()} />)
        const isPublicText = screen.getByText(/Privé/i)

        expect(isPublicText).toBeTruthy()
    })

    it('should display the message', () => {
        render(<Message date={new Date()} message={"Bonjour"} />)
        const message = screen.getByText(/Bonjour/i)

        expect(message).toBeTruthy()
    })
})