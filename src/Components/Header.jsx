// import React from 'react'
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleRounded';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsActiveRounded';


// function Header() {


//    const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <>
//       <header className="netflix-header">
//         <div className="logo">NETFLIX</div>

//          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>
//         <nav>
//           <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">TV Shows</a></li>
//             <li><a href="#">Movies</a></li>
//             <li><a href="#">New & Popular</a></li>
//             <li><a href="#">My List</a></li>
//           </ul>
//         </nav>
//         <section className="icon-section">
//           <div className="icon-container">
//             <SearchOutlinedIcon className="icon" />
//             <AccountCircleOutlinedIcon className="icon" />
//             <NotificationsNoneOutlinedIcon className="icon" />
//           </div>
//         </section>

//       </header>



//     </>
//   )
// }

// export default Header
import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleRounded';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsActiveRounded';
// import './App.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="netflix-header">
      <div className="logo">Netflix</div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">New & Popular</a></li>
        <li><a href="#">My List</a></li>
      </ul>


      <div className="icon-container">
        <SearchOutlinedIcon className="icon" />
        <AccountCircleOutlinedIcon className="icon" />
        <NotificationsNoneOutlinedIcon className="icon" />
      </div>


    </header >
  );
}

export default Header;
