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
import { subjectsData } from "../../../data";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

type Subject = {
  id: number;
  name: string;
};

export const SubjectComponent = () => {
  const [open, setOpen] = useState(false);
  const [subjectData, setSubjectData] = useState<Subject[]>(subjectsData);
  const [inputV, setInputV] = useState<Subject>({
    id: 0,
    name: "",
  });
  const [lastId, setLastId] = useState<number | undefined>(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const editSub = (id: number) => {
    setOpen(true);
    setLastId(id);

    const oldValue = subjectData.find((old) => old.id === id);
    if (oldValue) {
      setInputV(oldValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputV((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    setSubjectData((prevData) =>
      prevData.map((subject) =>
        subject.id === lastId ? { ...subject, name: inputV.name } : subject
      )
    );
    setOpen(false);
  };

  const delSub = (id: number) => {
    setSubjectData(subjectData.filter((item) => item.id !== id));
  };

  return (
    <Layout>
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
              {subjectData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">
                    <Button onClick={() => editSub(row.id)}>
                      <FaPenToSquare />
                    </Button>
                    <Button onClick={() => delSub(row.id)}>
                      <FaTrashAlt />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Subject</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={inputV.name}
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
