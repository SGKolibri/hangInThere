// import { useContext } from "react"
// import { GuessedLettersContext } from "../context/guessedLetters"

type HangmanWordProps = {
    guessedLetters: string[],
    word: string
}

export default function HangmanWord({ guessedLetters, word }: HangmanWordProps) {

    return (
        <>
            <div className="flex gap-2 text-8xl font-bold uppercase">
                {word.split('').map((letter, index) => (
                    <span key={index} className="border-b-4 border-solid">
                        <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }} >
                            {letter}
                        </span>
                    </span>
                ))}
            </div >
        </>
    )
}