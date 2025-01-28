import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { motion } from 'framer-motion';

export default function LoginScreen() {

    const navigate = useNavigate()

    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

    return (
        <motion.div style={{ minHeight: '100vh' }} className="w-full min-h-full flex flex-col items-center gap-10 justify-center overflow-hidden bg-raisin_black-400 text-white_f">
            <h1 className='text-3xl font-bold'>
                Log in or create an account
            </h1>
            <div className='w-[25%] flex flex-col gap-1 justify-center'>
                <label className='font-semibold'>
                    Email address
                </label>
                <input type='email' className='w-full mb-4 px-2 py-2.5 text-raisin_black-100 bg-white_f rounded-sm' />
                <motion.button whileTap={{ scale: 0.97 }} className="w-full px-8 py-2.5 font-semibold text-white_f bg-dogwood_rose-500 rounded-sm">
                    Log in
                </motion.button>
                <div className='w-full flex items-center my-4'>
                    <div className='border-t border-white_f flex-grow mr-2' />
                    <span className='text-white_f'>or</span>
                    <div className='border-t border-white_f flex-grow ml-2' />
                </div>
                {/* login with google button */}
                <GoogleLogin onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                    onError={() => {
                        console.log('Login Failed');
                    }} />

            </div>
            <div className='w-[40%] flex justify-around'>
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