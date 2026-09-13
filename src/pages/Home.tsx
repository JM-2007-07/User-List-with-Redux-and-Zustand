import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useDataZ } from "../app/users"
import type { RootState } from "../store/store"
import { deleteUserR, editUserR, setStatusFilter } from "../store/userSlice"
import AddModal from "../components/AddModal"
import EditModal from "../components/EditModal"
import { useNavigate } from "react-router"
import Checkbox from '@mui/material/Checkbox';


export default function Home() {
    const navigate = useNavigate()

    const { dataZ, deleteUserZ, search, setSearch } = useDataZ((store) => store)
    const { dataR, statusFilter } = useSelector((state: RootState) => state.users)
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

    interface User {
        id: number
        name: string
        city: string
        avatar: string
        age?: number
        status?: boolean
        position?: string
    }
    const [selectedUser, setSelectedUser] = useState<User | null>(null)

    const mainData = dataZ.map((elZ) => {
        const elR = dataR.find((el) => el.id === elZ.id)
        return { ...elZ, ...elR }
    })

    const filteredMainData = mainData.filter((el) => {
        const matchesSearch = el.name.toLowerCase().includes(search.toLowerCase().trim())
        const matchesStatus = statusFilter === "all" || (statusFilter === "active" && el.status === true) || (statusFilter === "inactive" && el.status === false)
        return matchesSearch && matchesStatus
    })

    return (
        <>
            <AddModal open={open} setOpen={setOpen} />
            <EditModal open={openEdit} setOpen={setOpenEdit} user={selectedUser} />
            <Box sx={{ maxWidth: 1400, width: "95%", margin: "24px auto" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, mb: 5 }}>
                    <Typography sx={{fontSize: '50px', fontWeight:'700'}}>User List</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <TextField value={search} onChange={(e) => setSearch(e.target.value)} label="Search users" size="small" />
                        <FormControl size="small" sx={{ minWidth: 160 }}>
                            <InputLabel>Status</InputLabel>
                            <Select value={statusFilter} label="Status" onChange={(e) => dispatch(setStatusFilter(e.target.value as "all" | "active" | "inactive"))}>
                                <MenuItem value="all">All users</MenuItem>
                                <MenuItem value="active">Active</MenuItem>
                                <MenuItem value="inactive">Inactive</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" onClick={() => setOpen(true)}>Add</Button>
                    </Box>
                </Box>
                <TableContainer component={Paper} elevation={3}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><b style={{fontSize:'17px'}}>Name</b></TableCell>
                                <TableCell><b style={{fontSize:'17px'}}>Age</b></TableCell>
                                <TableCell><b style={{fontSize:'17px'}}>City</b></TableCell>
                                <TableCell><b style={{fontSize:'17px'}}>Status</b></TableCell>
                                <TableCell><b style={{fontSize:'17px'}}>Actions</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredMainData.map((el) => (
                                <TableRow key={el.id} hover>
                                    <TableCell>
                                        <Box sx={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                                            <Avatar sx={{width: 56, height: 56}} alt={el.name} src={el.avatar} />
                                            <Typography sx={{fontSize:'16px', fontWeight: '600'}}>
                                                {el.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>{el.age}</TableCell>
                                    <TableCell>{el.city}</TableCell>
                                    <TableCell>
                                        <Box sx={{px:2, py:0.5, width:'fit-content', borderRadius:'20px', bgcolor:`${el.status ? 'lightgreen' : 'rgb(238, 144, 144)'}`}}>
                                            <Typography sx={{fontWeight: '600', fontSize:'14px', color: `${el.status ? 'green' : 'red'}`}}>{el.status ? "Active" : "Inactive"}</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: "flex", gap: 1 }}>
                                            <Checkbox
                                                checked={el.status}
                                                onChange={() => {
                                                    dispatch(editUserR({
                                                        id: el.id,
                                                        age: Number(el.age),
                                                        status: !el.status,
                                                        position: String(el.position)
                                                    }))
                                                }}
                                            />
                                            <Button size="small" variant="outlined" onClick={() => { setSelectedUser(el); setOpenEdit(true) }}>Edit</Button>
                                            <Button size="small" variant="outlined" color="success" onClick={() => navigate(`/info/${el.id}`)}>Info</Button>
                                            <Button size="small" variant="outlined" color="error" onClick={() => { dispatch(deleteUserR(el.id)); deleteUserZ(el.id) }}>Delete</Button>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}