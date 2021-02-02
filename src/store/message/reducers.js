import { createSlice } from '@reduxjs/toolkit'

const messagesSlice = createSlice({
    name: 'messages',
    initialState: [],
    reducers: {
        addMessage: {
            reducer(state, action) {
                const { message, isPublic } = action.payload

                state.push({
                    message,
                    isPublic,
                    date: Date.now()
                })
            },
            prepare(params) {
                const { message, isPublic } = params
                return { payload: { message, isPublic } }
            }
        },
        initMessage: {
            reducer(state, action) {
                const { data } = action.payload

                state = [...data]
                return state
            },
            prepare(params) {
                const { data } = params
                return { payload: { data } }
            }
        },
        deleteMessage: {
            reducer(state, action) {

            },
            prepare(params) {
                return { payload: {} }
            }
        }
    }
})

export const { addMessage, initMessage } = messagesSlice.actions

export default messagesSlice.reducer