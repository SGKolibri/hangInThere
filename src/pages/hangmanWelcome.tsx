import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HangmanWelcome() {

    const navigate = useNavigate()

    return (
        <motion.div style={{ minHeight: '100vh' }} className="w-full min-h-full flex flex-col items-center gap-10 justify-center overflow-hidden bg-raisin_black-400 text-white_f">
            <h1 className='text-5xl font-bold'>
                Welcome to Hangleman!
            </h1>
            <h2 className='text-2xl text-center'>
                Guess the word before you’re <br /> left hanging!
            </h2>
            <div className='w-[40%] flex justify-around'>
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="w-1/4 px-8 py-2.5 font-semibold text-white_f border border-dogwood_rose rounded-full"
                    onClick={() => { navigate('/login') }}
                >
                    Log in
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="w-1/4 px-8 py-2.5 font-semibold text-white_f border border-dogwood_rose bg-dogwood_rose-500 rounded-full"
                    onClick={() => { navigate('/game') }}
                >
                    Play
                </motion.button>
            </div>

            <footer className='text-sm tracking-wide'>
                Created and Edited by&nbsp;
                <motion.a
                    whileHover={{ scale: 1.03, color: '#df0e66 ' }}
                    href='https://samuelcustodio.com'
                    target='_blank'
                    style={{ display: 'inline-block' }}
                >
                    Samuel Custódio
                </motion.a>
            </footer>
        </motion.div >
    )
}