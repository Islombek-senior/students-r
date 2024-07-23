import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Layout from "../../components/layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { studentsData as initialStudentsData } from "../../data";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";

interface StudentType {
  id: string;
  name: string;
  lastName: string;
  classId: number;
  adress: string;
}

export const StudentsPage = () => {
  const [open, setOpen] = React.useState(false);
  const [studentsData, setStudentsData] =
    useState<StudentType[]>(initialStudentsData);
  const [filteredStudents, setFilteredStudents] =
    useState<StudentType[]>(initialStudentsData);
  const [edit, setEdit] = useState({
    id: "",
    name: "",
    lastName: "",
    classId: 0,
    adress: "",
  });

  const handleClickOpen = (student: StudentType) => {
    setEdit(student);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEdit((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setStudentsData((prevData) =>
      prevData.map((student) => (student.id === edit.id ? edit : student))
    );
    setOpen(false);
  };

  const handleDelete = (id: string) => {
    setStudentsData((prevData) =>
      prevData.filter((student) => student.id !== id)
    );
    setFilteredStudents((prevData) =>
      prevData.filter((student) => student.id !== id)
    );
  };

  const [selectedClass, setSelectedClass] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    const id = event.target.value;
    setSelectedClass(id);
    filterStudent(parseInt(id));
  };

  const filterStudent = (classId: number) => {
    const filtered = studentsData.filter(
      (student) => student.classId === classId
    );
    setFilteredStudents(filtered);
  };

  return (
    <Layout>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "10px" }}
      >
        <h1>Students Page</h1>
        <Box sx={{ width: "150px", mr: "20px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedClass}
              label="Class"
              onChange={handleChange}
            >
              <MenuItem value="10">10-A</MenuItem>
              <MenuItem value="20">10-B</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: 1200, height: 200 }}>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Adress</TableCell>
                <TableCell align="right">Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsData
                .filter(
                  (student) => String(student.classId) === String(selectedClass)
                )
                .map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.adress}</TableCell>
                    <TableCell align="right">
                      <Button onClick={() => handleClickOpen(row)}>
                        <FaPenToSquare />
                      </Button>
                      <Button onClick={() => handleDelete(row.id)}>
                        <FaTrashAlt />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Edit Student</DialogTitle>
          <DialogContentText>
            <DialogContentText id="alert-dialog-description">
              <Input
                type="text"
                name="name"
                value={edit.name}
                onChange={handleEditChange}
                placeholder="Name"
              />
              <Input
                type="text"
                name="lastName"
                value={edit.lastName}
                onChange={handleEditChange}
                placeholder="Last Name"
              />
              <Input
                type="text"
                name="classId"
                value={edit.classId}
                onChange={handleEditChange}
                placeholder="Class ID"
              />
              <Input
                type="text"
                name="adress"
                value={edit.adress}
                onChange={handleEditChange}
                placeholder="Address"
              />
            </DialogContentText>
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} autoFocus>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};
