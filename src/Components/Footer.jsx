import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



function Footer() {
  return (
<>
<footer className="netflix-footer">
<section className="footer">
  <p className="footer-title">Questions? Contact us.</p>
  <div className="footer-links">
    <ul>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Help Center</a></li>
      <li><a href="#">Account</a></li>
      <li><a href="#">Media Center</a></li>
    </ul>
    <ul>
      <li><a href="#">Investor Relations</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Ways to Watch</a></li>
      <li><a href="#">Terms of Use</a></li>
    </ul>
    <ul>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Cookie Preferences</a></li>
      <li><a href="#">Corporate Information</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
    <ul>
      <li><a href="#">Speed Test</a></li>
      <li><a href="#">Legal Notices</a></li>
      <li><a href="#">Only on Netflix</a></li>
    </ul>
  </div>

<section className="social-icon-section">
  <div className="icon-container">
    <FacebookIcon className="icon facebook" />
    <TwitterIcon className="icon twitter" />
    <InstagramIcon className="icon instagram" />
    <YouTubeIcon className="icon youtube" />
    <LinkedInIcon className="icon linkedin" />
    <AttachMoneyIcon className="icon money" />
  </div>
</section>
   <p className="footer-copy">&copy; 2025 Netflix Clone by Bilal</p>

</section>


</footer>
</>  )
}

export default Footer