import { Box, Typography, Button, Divider } from "@mui/material"
import { useNavigate, useParams } from "react-router"

const users = [
    {
        id: 1,
        name: "Ali Nazirov",
        city: "Dushanbe",
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/5.jpg",
        age: 20,
        status: true,
        position: "admin"
    },
    {
        id: 2,
        name: "Vali Zamirov",
        city: "Khujand",
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/75.jpg",
        age: 24,
        status: false,
        position: "mentor"
    },
    {
        id: 3,
        name: "Rustam Karimov",
        city: "Dushanbe",
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/15.jpg",
        age: 21,
        status: true,
        position: "developer"
    },
    {
        id: 4,
        name: "Farid Sharifov",
        city: "Kulob",
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/25.jpg",
        age: 23,
        status: false,
        position: "designer"
    },
    {
        id: 5,
        name: "Said Rahmonov",
        city: "Bokhtar",
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/35.jpg",
        age: 19,
        status: true,
        position: "student"
    },
    {
        id: 6,
        name: "Aziz Davlatov",
        city: "Istaravshan",
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/45.jpg",
        age: 26,
        status: true,
        position: "manager"
    },
    {
        id: 7,
        name: "Farrukh Olimov",
        city: "Tursunzoda",
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/55.jpg",
        age: 22,
        status: false,
        position: "developer"
    },
    {
        id: 8,
        name: "Jamshed Safarov",
        city: "Dushanbe",
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/65.jpg",
        age: 25,
        status: true,
        position: "mentor"
    },
    {
        id: 9,
        name: "Kamol Naimov",
        city: "Khujand",
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/85.jpg",
        age: 20,
        status: false,
        position: "designer"
    },
    {
        id: 10,
        name: "Bekzod Yusufov",
        city: "Panjakent",
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/95.jpg",
        age: 28,
        status: true,
        position: "manager"
    }
]

export default function UserInfo() {
    const {id} = useParams()
    const navigate = useNavigate()
    const user = users.find((el) => el.id == Number(id))
    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#f3f4f6", py: 6 }}>
            <Box sx={{ maxWidth: 900, width: "95%", margin: "0 auto", padding: 4, bgcolor: "white", borderRadius: 4, boxShadow: 3 }}>
                <Box key={id} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 5 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width:'400px' }}>
                        <Typography sx={{ fontSize: 44, fontWeight: 700, color: "#222" }}>
                            {user?.name}
                        </Typography>
                        <Typography sx={{ fontSize: 22, color: "text.secondary", mb: 3 }}>
                            {user?.position}
                        </Typography>
                        <Divider sx={{ mb: 3 }} />
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Box>
                                <Typography sx={{fontSize:'12px', color:'gray'}}>City</Typography>
                                <Typography sx={{fontSize: '20px'}}>{user?.city}</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{fontSize:'12px', color:'gray'}}>{user?.age}</Typography>
                                <Typography sx={{fontSize: '20px'}}>{user?.age} years</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{fontSize:'12px', color:'gray'}}>Status</Typography>
                                <Box sx={{px:2, py:0.5, width:'fit-content', borderRadius:'20px', bgcolor:`${user?.status ? 'lightgreen' : 'rgb(238, 144, 144)'}`}}>
                                    <Typography sx={{fontWeight: '600', fontSize:'14px', color: `${user?.status ? 'green' : 'red'}`}}>{user?.status ? "Active" : "Inactive"}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Button variant="contained" onClick={() => navigate(-1)} sx={{ mt: 4 }}>Back</Button>
                    </Box>
                    <Box sx={{ width: 400, height: 400, overflow: "hidden", borderRadius: 4 }}>
                        <Box component="img" src={user?.avatar} alt={user?.name} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
} 