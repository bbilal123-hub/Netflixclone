import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon  from '@mui/icons-material/AccountCircleRounded';
import NotificationsNoneOutlinedIcon  from '@mui/icons-material/NotificationsActiveRounded';

function Header() {
  return (
    <>
<header className="netflix-header">
  <div className="logo">NETFLIX</div>
  <nav>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">TV Shows</a></li>
      <li><a href="#">Movies</a></li>
      <li><a href="#">New & Popular</a></li>
      <li><a href="#">My List</a></li>
    </ul>
  </nav>
    <section className="icon-section">
      <div className="icon-container">
        <SearchOutlinedIcon className="icon" />
        <AccountCircleOutlinedIcon className="icon" />
        <NotificationsNoneOutlinedIcon className="icon" />
      </div>
    </section>

  {/* <div className="profile">Profile</div> */}
</header>



</>
  )
}

export default Header