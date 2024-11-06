import { ThemeProvider } from "styled-components"
import { theme } from "./styles"
import Hero from "./components/Home/Hero/Hero"
import { EstiloGlobal } from "./styles"



function App() {
  return(
    <>
      <ThemeProvider theme={theme}>
        <EstiloGlobal />
        <Hero />
      </ThemeProvider>
    </>
  )
}

export default App
