
import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import TypingField from '.'
import { render, fireEvent, screen } from '../../store/test-utils'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

const mockStore = configureStore([]);

describe('MessagesWindow Component', () => {
    let component;
    let store;
    beforeEach(() => {
        store = mockStore({
            messages: [{
                message: 'abc',
                isPublic: true,
                date: Date.now()
            }]
        },
        );
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <TypingField />
            </Provider>
        );
    })

    it('should display the component', () => {
        expect(component.toJSON()).toMatchSnapshot()
    })

    it('should display several messages', () => {
        expect(component.toJSON().children.filter((c) => c.type === 'div')[0].children.length).toBe(1)
    })

})