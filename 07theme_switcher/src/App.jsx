import { useState, useEffect } from 'react';
 import  { themeProvider }  from './context/theme.jsx';
import Themebtn  from './components/Themebtn';
import Card  from './components/Card';




function App() {
  const [themeMode, setThemeMode] = useState('light')
  const nightMode = ()=> setThemeMode('night')
  const lightMode = ()=> setThemeMode('light')

// const [themeMode, setThemeMode] = useState('light')
// const nightMode = ()=> setThemeMode('dark');
// const lightMode = ()=> setThemeMode('light');

//actual change in theme

useEffect(() => {
  const Html = document.querySelector('html')
  Html.classList.remove('light', 'dark')
  Html.classList.add(themeMode)
}, [themeMode]);

  return (
    <themeProvider value={{themeMode, nightMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  < Themebtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>

    </themeProvider>
  )
}

export default App
