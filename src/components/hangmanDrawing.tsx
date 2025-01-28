import HangmanSVG from '../assets/hangman.svg'
import { Hangman0, Hangman1, Hangman2, Hangman3, Hangman4, Hangman5, Hangman6 } from '../assets'

const HangmanArray = [Hangman0, Hangman1, Hangman2, Hangman3, Hangman4, Hangman5, Hangman6]

const head = (
    <div className="absolute top-[49px] right-[-20px] h-[50px] w-[50px] bg-raisin_black-400 border-[10px] border-white_f rounded-full" />
)

const body = (
    <div className="absolute top-[98px] right-0 h-[100px] w-[10px] bg-white_f" />
)

const leftArm = (
    <div className="absolute top-[108px] right-[10px] h-[10px] w-[80px] bg-white_f rounded-l-sm"
        style={{
            transformOrigin: 'top right',
            rotate: '-30deg',
        }}
    />
)

const rightArm = (
    <div className="absolute top-[108px] right-[-80px] h-[10px] w-[80px] bg-white_f rounded-r-sm"
        style={{
            transformOrigin: 'top left',
            rotate: '30deg',
        }}
    />
)

const leftLeg = (
    <div className="absolute top-[190px] right-[0px] h-[100px] w-[10px] bg-white_f rounded-b-sm"
        style={{
            transformOrigin: 'top right',
            rotate: '-40deg',
        }}
    />
)

const rightLeg = (
    <div className="absolute top-[190px] right-[0px] h-[100px] w-[10px] bg-white_f rounded-b-sm"
        style={{
            transformOrigin: 'top left',
            rotate: '40deg',
        }}
    />
)

const bodyParts = [head, body, leftArm, rightArm, leftLeg, rightLeg]

type HangmanDrawingProps = {
    remaingTries: number
}

export default function HangmanDrawing({ remaingTries }: HangmanDrawingProps) {

    return (
        <div className="relative">
            {/* {bodyParts.slice(0, remaingTries)}   */}
            {/* <div className="absolute top-0 right-0 h-[50px] w-[10px] bg-white_f rounded-sm" />
            <div className="h-[10px] w-[220px] bg-white_f ml-[80px]" />
            <div className="h-[400px] w-[10px] bg-white_f ml-[120px]" />
            <div className="h-[10px] w-[250px] bg-white_f rounded-sm" /> */}
            <img src={HangmanArray[remaingTries]} alt="Hangman" className="w-full h-[400px]" />
        </div>
    )
}