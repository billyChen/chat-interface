import React from 'react'
import { render, screen } from '../../store/test-utils'

// Component
import Message from './index'

describe('Message component', () => {

    it('should display the component', () => {
        let component = render(<Message message={'abc'} isPublic={true} date={Date.now()} />)
        expect(component).toMatchSnapshot()
    })

    it('should display "Prive"', () => {
        render(<Message message={'abc'} isPublic={false} date={Date.now()} />)
        const isPublicText = screen.getByText(/Privé/i)

        expect(isPublicText).toBeTruthy()
    })

    it('should display the message', () => {
        render(<Message date={Date.now()} message={"Bonjour"} />)
        const message = screen.getByText(/Bonjour/i)

        expect(message).toBeTruthy()
    })
})