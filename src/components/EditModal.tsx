import { useDispatch } from "react-redux"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useDataZ } from "../app/users"
import { editUserR } from "../store/userSlice"

const EditModal = ({ open, setOpen, user }: any) => {
    const dispatch = useDispatch()
    const { editUserZ } = useDataZ()

    const editUser = (e: any) => {
        e.preventDefault()
        dispatch(editUserR({
            id: user.id,
            age: e.target.age.value,
            status: e.target.status.value === "active",
            position: e.target.position.value
        }))
        editUserZ({
            id: user.id,
            name: e.target.name.value,
            city: e.target.city.value,
            avatar: e.target.avatar.value
        })
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
            <form onSubmit={editUser}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
                    {user && (
                        <>
                            <TextField name="name" label="Name" defaultValue={user.name} fullWidth />
                            <TextField name="avatar" label="Avatar" defaultValue={user.avatar} fullWidth />
                            <TextField name="city" label="City" defaultValue={user.city} fullWidth />
                            <TextField name="age" label="Age" type="number" defaultValue={user.age} fullWidth />
                            <TextField name="position" label="Position" type="text" defaultValue={user.position} fullWidth />
                            <FormControl fullWidth>
                                <InputLabel>Status</InputLabel>
                                <Select name="status" label="Status" defaultValue={user.status ? "active" : "inactive"}>
                                    <MenuItem value="active">Active</MenuItem>
                                    <MenuItem value="inactive">Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button type="button" onClick={() => setOpen(false)}>Close</Button>
                    <Button type="submit" variant="contained">Save</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default EditModal