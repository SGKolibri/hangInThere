import { createContext, useState, useContext, useEffect, ReactNode } from 'react';


const GuessedLettersContext = createContext({} as any);

export const useGuessedLetters = () => {
  return useContext(GuessedLettersContext);
}

interface GuessedLettersProviderProps {
  children: ReactNode;
}

export const GuessedLettersProvider: React.FC<GuessedLettersProviderProps> = ({ children }) => {
  const [guessedLetters, setGuessedLetters] = useState<String[]>([]);

  useEffect(() => {
    localStorage.setItem('guessedLetters', JSON.stringify(guessedLetters));
  }, []);

  return (
    <GuessedLettersContext.Provider value={{ guessedLetters, setGuessedLetters }}>
      {children}
    </GuessedLettersContext.Provider>
  );
};