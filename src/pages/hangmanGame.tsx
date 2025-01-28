import { useCallback, useEffect, useState, useContext } from "react"
import { motion } from 'framer-motion'
import words from '../wordList.json'
import HangmanDrawing from "../components/hangmanDrawing"
import HangmanWord from "../components/hangmanWord"
import Keyboard from "../components/keyboard"
import { useGuessedLetters } from "../context/guessedLettersContext"
import { Dialog, DialogContent, DialogActions } from "@mui/material"

function HangmanGame() {

    const { guessedLetters, setGuessedLetters } = useGuessedLetters()

    const [wordOfTheDay, setWordOfTheDay] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    })

    // const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    const incorrectLetters = guessedLetters.filter((letter: any) => !wordOfTheDay.includes(letter))

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter)) {
            return
        }
        setGuessedLetters((currentLetters: any) => [...currentLetters, letter])

    }, [guessedLetters])

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            const letter = event.key.toLowerCase()
            if (!letter.match(/^[a-z]$/)) return
            event.preventDefault()
            addGuessedLetter(letter)
        }

        document.addEventListener('keypress', handler)
        return () => {
            document.removeEventListener('keypress', handler)
        }

    }, [guessedLetters])

    return (
        <>
            <div style={{ minHeight: '100vh' }} className="w-full flex flex-col items-center justify-center gap-8 pb-2 font-montserrat bg-raisin_black-400 text-white_f">
                <h1 className="text-xl font-semibold">
                    {wordOfTheDay}
                </h1>
                <div className="w-full flex justify-center">
                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        className="px-6 py-2.5 text-white_f bg-dogwood_rose-500 rounded-full"
                        onClick={() => {
                            setWordOfTheDay(words[Math.floor(Math.random() * words.length)])
                            setGuessedLetters([])
                        }}
                    >
                        next word
                    </motion.button>
                </div>
                <HangmanDrawing remaingTries={incorrectLetters.length} />
                <HangmanWord guessedLetters={guessedLetters} word={wordOfTheDay} />
                <div className="w-1/2">
                    <Keyboard
                        activeLetter={
                            guessedLetters.filter((letter: any) => wordOfTheDay.includes(letter))
                        }
                        inactiveLetter={incorrectLetters}
                        addGuessedLetter={addGuessedLetter}
                    />
                </div>
            </div >
            {/* <Dialog>
        
      </Dialog> */}
        </>
    )
}

export default HangmanGame
