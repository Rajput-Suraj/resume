import { useEffect, useState } from 'react';
import { FaDesktop } from 'react-icons/fa';

import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

import Main from './components/Main';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;

      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;

      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme])

  darkQuery.addEventListener('change', (e: any) => {
    if (!('theme' in localStorage)) {
      if (e.matches) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }
  })

  const options = [
    {
      icon: <MdOutlineLightMode />,
      text: 'light',
    },
    {
      icon: <MdOutlineDarkMode />,
      text: 'dark',
    },
    {
      icon: <FaDesktop />,
      text: 'system',
    },
  ];

  return (
    <div className="dark:text-offWhite-50 dark:bg-customDark-600 p-6 duration-100">
      <div className="fixed top-5 right-10 duration-100 dark:bg-customDark-600 bg-gray-100 rounded">
        <div className="flex items-center justify-between flex-col sm:flex-row">
          {options.map((option: any) => {
            return (
              <button
                key={option?.text}
                onClick={() => setTheme(option.text)}
                className={`w-8 h-8 leading-9 p-1 text-xl rounded-full m-1 ${theme === option?.text && 'text-neutral-900'}`}
              >
                {option?.icon}
              </button>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto lg:px-80 ">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
