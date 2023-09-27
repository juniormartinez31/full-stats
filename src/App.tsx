import { createTheme } from "@mui/material/styles"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { ThemeProvider } from "@emotion/react"
import { Box, CssBaseline } from "@mui/material"
import Navbar from "./scenes/navbar"
import Dashcontrol from "./scenes/dashboard"

function App() {

  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width='100%' height='100%' padding='1rem 2rem 4rem 2rem'>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashcontrol />} />
              <Route
                path="/predition"
                element={<div>predition page</div>}
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
