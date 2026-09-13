import { create } from "zustand";

interface UserZ {
    id: number
    name: string
    city: string
    avatar: string
}

interface DataState {
    dataZ: UserZ[]
    search: string
    addUserZ: (user: UserZ) => void
    editUserZ: (user: UserZ) => void
    deleteUserZ: (id: number) => void
    setSearch: (value: string) => void
}

export const useDataZ = create<DataState>((set) => ({
    dataZ: [
        {
            id: 1,
            name: "Ali Nazirov",
            city: "Dushanbe",
            avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/5.jpg"
        },
        {
            id: 2,
            name: "Vali Zamirov",
            city: "Khujand",
            avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/75.jpg"
        },
        {
            id: 3,
            name: "Rustam Karimov",
            city: "Dushanbe",
            avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/15.jpg"
        },
        {
            id: 4,
            name: "Farid Sharifov",
            city: "Kulob",
            avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/25.jpg"
        },
        {
            id: 5,
            name: "Said Rahmonov",
            city: "Bokhtar",
            avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/35.jpg"
        },
        {
            id: 6,
            name: "Aziz Davlatov",
            city: "Istaravshan",
            avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/45.jpg"
        },
        {
            id: 7,
            name: "Farrukh Olimov",
            city: "Tursunzoda",
            avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/55.jpg"
        },
        {
            id: 8,
            name: "Jamshed Safarov",
            city: "Dushanbe",
            avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/65.jpg"
        },
        {
            id: 9,
            name: "Kamol Naimov",
            city: "Khujand",
            avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/85.jpg"
        },
        {
            id: 10,
            name: "Bekzod Yusufov",
            city: "Panjakent",
            avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/95.jpg"
        }
    ],
    search: '',
    addUserZ: (user) => set((state) => ({dataZ: [...state.dataZ, user]})),
    editUserZ: (user) => set((state) => ({dataZ: state.dataZ.map((el) => el.id == user.id ? user : el)})),
    deleteUserZ: (id) => set((state) => ({dataZ: state.dataZ.filter((el) => el.id != id)})),
    setSearch: (value) => set({search: value})
}))
