import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Layout from "../../../components/layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { classesData } from "../../../data";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

export const ClassesPage = () => {
  const [dataClass, setDataclass] = useState(classesData);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({ id: 0, name: "" });

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (classData: { id: number; name: string }) => {
    setEditData(classData);
    setOpen(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    setDataclass((prevData) =>
      prevData.map((classItem) =>
        classItem.id === editData.id ? editData : classItem
      )
    );
    setOpen(false);
  };

  const delClass = (id: number) => {
    setDataclass(dataClass.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <h1>Classes Page</h1>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: 1200, height: 200 }}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataClass.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">
                    <Button onClick={() => handleEdit(row)}>
                      <FaPenToSquare />
                    </Button>
                    <Button onClick={() => delClass(row.id)}>
                      <FaTrashAlt />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Class</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={editData.name}
              onChange={handleEditChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" onClick={saveEdit}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};
