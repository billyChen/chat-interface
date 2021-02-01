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
        updateMessage: {
            reducer(state, action) {

            },
            prepare(params) {
                return { payload: {} }
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

export const { addMessage } = messagesSlice.actions

export default messagesSlice.reducer