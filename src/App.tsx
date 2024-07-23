import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { StudentsPage } from "./pages/students";
import { ClassesPage } from "./pages/students/classes";
import React, { useState } from "react";
import { PageType } from "./types";
import { SubjectComponent } from "./pages/students/subjects";
import { Teachers } from "./pages/students/teachers";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const AppContext = React.createContext({
  activePage: "classes" as PageType,
  setAvtivePage: (page: PageType) => {},
});

function App() {
  const [activePage, setAvtivePage] = useState<PageType>("classes");

  return (
    <AppContext.Provider value={{ activePage, setAvtivePage }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {activePage === "students" && <StudentsPage />}
        {activePage === "classes" && <ClassesPage />}
        {activePage === "subjects" && <SubjectComponent />}
        {activePage === "teachers" && <Teachers />}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
