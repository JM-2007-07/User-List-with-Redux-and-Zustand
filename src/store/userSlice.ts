import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface User {
    id: number,
    age: number,
    status: boolean,
    position: string
}

export interface UsersState {
    dataR: User[]
    statusFilter: "all" | "active" | "inactive"
}

const initialState: UsersState = {
    dataR: [
        {
            id: 1,
            age: 20,
            status: true,
            position: "admin"
        },
        {
            id: 2,
            age: 24,
            status: false,
            position: "mentor"
        },
        {
            id: 3,
            age: 21,
            status: true,
            position: "developer"
        },
        {
            id: 4,
            age: 23,
            status: false,
            position: "designer"
        },
        {
            id: 5,
            age: 19,
            status: true,
            position: "student"
        },
        {
            id: 6,
            age: 26,
            status: true,
            position: "manager"
        },
        {
            id: 7,
            age: 22,
            status: false,
            position: "developer"
        },
        {
            id: 8,
            age: 25,
            status: true,
            position: "mentor"
        },
        {
            id: 9,
            age: 20,
            status: false,
            position: "designer"
        },
        {
            id: 10,
            age: 28,
            status: true,
            position: "manager"
        }
    ],
    statusFilter: "all"
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUserR: (state, action: PayloadAction<number>) => {
            state.dataR = state.dataR.filter((user) => user.id != action.payload)
        },
        addUserR: (state, action: PayloadAction<User>) => {
            state.dataR.push(action.payload)
        },
        editUserR: (state, action: PayloadAction<User>) => {
            const index = state.dataR.findIndex((user) => user.id == action.payload.id)
            if (index !== -1) {
                state.dataR[index] = action.payload
            }
        },
        setStatusFilter: (state, action: PayloadAction<"all" | "active" | "inactive">) => {
            state.statusFilter = action.payload
        }
    }
})

export default usersSlice.reducer
export const {deleteUserR, addUserR, editUserR, setStatusFilter} = usersSlice.actions