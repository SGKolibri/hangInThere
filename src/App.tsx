import HangmanGame from "./pages/hangmanGame"
import HangmanWelcome from "./pages/HangmanWelcome"
import LoginScreen from "./pages/loginScreen"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HangmanWelcome />} />
        <Route path="/game" element={<HangmanGame />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  )
}

export default App
