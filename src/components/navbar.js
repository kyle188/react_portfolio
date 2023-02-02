const Navbar = ({ view, setView }) => {
    return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">About Me</a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a 
                  onClick={() => setView('search')}
                  className={`nav-link ${view === 'search' ? 'active fw-bold' : ''}`} 
                  href="#"
                >
                 Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a 
                  onClick={() => setView('saved')}
                  className={`nav-link ${view === 'saved' ? 'active fw-bold' : ''}`}
                  href="#"
                >
                   Contact
                </a>
              </li>
              <li className="nav-item">
                <a 
                  onClick={() => setView('saved')}
                  className={`nav-link ${view === 'saved' ? 'active fw-bold' : ''}`}
                  href="#"
                >
                   Resume
                </a>
              </li>
            </ul>
        </div>
      </nav>
    )
  }
  
  export default Navbar