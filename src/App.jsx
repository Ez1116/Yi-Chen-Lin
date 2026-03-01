import { useState, useRef } from 'react';
import { AppContext } from './context/AppContext';
import NavBar from './components/layout/NavBar';
import HomePage from './components/pages/HomePage';
import DeveloperPage from './components/pages/DeveloperPage';
import PublicationsPage from './components/pages/PublicationsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [slidingOutPage, setSlidingOutPage] = useState(null);
  const isTransitioningRef = useRef(false);

  const navigateTo = (pageName) => {
    if (pageName === currentPage || isTransitioningRef.current) return;

    isTransitioningRef.current = true;
    setSlidingOutPage(currentPage);

    setTimeout(() => {
      setCurrentPage(pageName);
      setSlidingOutPage(null);
      isTransitioningRef.current = false;
      window.scrollTo(0, 0);
    }, 300);
  };

  return (
    <AppContext.Provider value={{ currentPage, navigateTo }}>
      <NavBar />
      <HomePage
        isActive={currentPage === 'home'}
        isSlidingOut={slidingOutPage === 'home'}
      />
      <DeveloperPage
        isActive={currentPage === 'developer'}
        isSlidingOut={slidingOutPage === 'developer'}
      />
      <PublicationsPage
        isActive={currentPage === 'publications'}
        isSlidingOut={slidingOutPage === 'publications'}
      />
    </AppContext.Provider>
  );
}
