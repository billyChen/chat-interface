import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import TypingField from '.'
import { render, fireEvent, screen } from '../../store/test-utils'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

// Actions
import { addMessage } from '../../store/message/reducers'
const mockStore = configureStore([]);

describe('Typing field component', () => {
    let component;
    let store;
    beforeEach(() => {
        store = mockStore({
            messages: []
        });
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <TypingField />
            </Provider>
        );
    })

    it('should render correctly', () => {
        expect(component).toMatchSnapshot()
    })

    it('should dispatch an action on click', () => {
        renderer.act(() => {
            component.root.findAllByType('button')[1].props.onClick();
        });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            addMessage({
                isPublic: 'public',
                message: ''
            })
        );
    })

})