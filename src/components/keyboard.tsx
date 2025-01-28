import { useContext } from 'react'
import { useGuessedLetters } from '../context/guessedLettersContext.tsx'
import { motion } from 'framer-motion'

const keys = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
]

type KeyboardProps = {
    activeLetter: string,
    inactiveLetter: string,
    addGuessedLetter: (letter: string) => void
}

export default function Keyboard({ activeLetter, inactiveLetter, addGuessedLetter }: KeyboardProps) {
    const { guessedLetters, setGuessedLetters } = useGuessedLetters();

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
            gap: '.5rem',
        }}
            className="flex"
        >
            {keys.map((key) => (
                <motion.button key={key} className={`px-6 py-3 text-white_f font-semibold ${guessedLetters.includes(key) ? "bg-dogwood_rose-300 opacity-80" : "bg-dogwood_rose-500 opacity-100"} hover:bg-dogwood_rose-300 rounded-md uppercase`}
                    disabled={guessedLetters.includes(key) ? true : false}
                    onClick={() => addGuessedLetter(key)}
                >
                    {key}
                </motion.button>
            ))}
        </div>
    )
}