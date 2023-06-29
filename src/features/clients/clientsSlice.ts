import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface Client {
    id: string,
    name: string
}

export interface ClientsState {
    clients: Client[];
}

const initialState: ClientsState = {
    clients: [],
}

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setClients: (state, action: PayloadAction<Client[]>,) => {
            state.clients = action.payload
        },
        addClient: (state, action: PayloadAction<Client>,) => {
            state.clients = [...state.clients, action.payload]
        },
        deleteClient: (state, action: PayloadAction<string>,) => {
            state.clients = state.clients.filter(client => client.id !== action.payload)
        },
    },
})

export const { setClients, addClient, deleteClient } = clientsSlice.actions

export default clientsSlice.reducer