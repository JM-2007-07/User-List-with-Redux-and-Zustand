import { useDispatch } from "react-redux"

import { useDataZ } from "../app/users"
import { addUserR } from "../store/userSlice"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"

const AddModal = ({ open, setOpen }: any) => {
    const dispatch = useDispatch()
    const { addUserZ } = useDataZ()

    const addUser = (e: any) => {
        e.preventDefault()
        const idx = Date.now()
        dispatch(addUserR({
            id: idx,
            age: e.target.age.value,
            status: e.target.status.value === "active",
            position: e.target.position.value
        }))
        addUserZ({
            id: idx,
            name: e.target.name.value,
            city: e.target.city.value,
            avatar: e.target.avatar.value
        })
        setOpen(false)
        e.target.reset()
    }

    return (
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
            <form onSubmit={addUser}>
                <DialogTitle>Add User</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
                    <Typography variant="body2" color="text.secondary">Add a new user to the list</Typography>
                    <TextField name="name" label="Name" fullWidth />
                    <TextField name="avatar" label="Avatar" fullWidth />
                    <TextField name="city" label="City" fullWidth />
                    <TextField name="position" label="Position" fullWidth />
                    <TextField name="age" label="Age" type="number" fullWidth />
                    <FormControl fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Select name="status" label="Status" defaultValue="active">
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button type="button" onClick={() => setOpen(false)}>Close</Button>
                    <Button type="submit" variant="contained">Add User</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddModal