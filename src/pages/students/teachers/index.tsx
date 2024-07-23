import Layout from "../../../components/layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { teacherData } from "../../../data";

import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";

type Teacher = {
  id: number;
  name: string;
  lastName: string;
  directClass: string;
};

export const Teachers = () => {
  const [open, setOpen] = useState(false);
  const [teacherDatas, setTeacherData] = useState<Teacher[]>(teacherData);
  const [inputValue, setInputValue] = useState({
    name: "",
    lastName: "",
    directClass: "",
  });
  const [lastId, setLastId] = useState<number | undefined>(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const editTeacher = (id: number | undefined) => {
    setOpen(true);
    setLastId(id);

    const oldValue = teacherDatas.find((old) => old.id === id);
    if (oldValue) {
      setInputValue({
        name: oldValue.name,
        lastName: oldValue.lastName,
        directClass: oldValue.directClass,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    setTeacherData((prevData) =>
      prevData.map((teacher) =>
        teacher.id === lastId ? { ...teacher, ...inputValue } : teacher
      )
    );
    setOpen(false);
  };

  return (
    <Layout>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: 1200, height: 200 }}>
            <TableHead>
              <TableRow>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Class</TableCell>
                <TableCell align="right">Tahrirlash</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teacherDatas.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  <TableCell align="right">{row.directClass}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => editTeacher(row.id)}>
                      <FaPenToSquare />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Teacher</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={inputValue.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="lastName"
              name="lastName"
              label="Last Name"
              type="text"
              fullWidth
              value={inputValue.lastName}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="directClass"
              name="directClass"
              label="Class"
              type="text"
              fullWidth
              value={inputValue.directClass}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={saveEdit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};
