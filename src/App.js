import { useState } from 'react'
import Navbar from './components/navbar'
import SavedPage from './pages/saved'
import SearchPage from './pages/search'
import ResumePage from './pages/resume'
import PortfolioPage from './pages/portfolio'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  const [view, setView] = useState('search')

  const renderView = () => {
    if (view === 'search') {
      return <SearchPage />
    } else if (view === 'saved') {
      return <SavedPage />
    } else if (view === 'portfolio') {
      return <PortfolioPage />
    } else if (view === 'resume') {
      return <ResumePage />
    }else {
      return 'No matching view found'
    }
  }

  return (
    <>
      <Header></Header>
      <Navbar 
        view={view}
        setView={setView}
        />
      { renderView() }
        <Footer></Footer>
    </>
  );
}

export default App;
