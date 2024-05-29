<style>
    footer {
      background-color: #333;
      color: white;
      padding: 1rem;
      text-align: center;
    }
  
    /* Flex container for the footer sections */
    .footer-container {
      display: flex;
      justify-content: space-around; /* Distribute space around the items */
    }
  
    .footer-container ul {
      list-style: none; /* Remove default list styling */
      padding: 0;
      margin: 0;
      margin: 0 2rem;
    }
  
    /* Horizontal list for the top-level ul */
    .footer-container > ul {
      display: flex;
    }
  
    /* Nested uls will remain vertical */
    .footer-container ul ul {
      display: block;
    }
  </style>
  

<footer>
    <div class='footer-container'>
        <ul class='footer'>
            <ul class='footerBlock' id='logo'>
                <li class='svariaLogo'>Our Logo</li>
            </ul>
            <ul class='footerBlock' id='docs'>
                <li><h5>Documentation</h5></li>
                <li><h6>How-To's and ReadMe</h6></li>
                <li><h6>Components</h6></li>
                <li><h6>Examples</h6></li>
            </ul>
            <ul class='footerBlock' id='community'>
                <li><h5>Community</h5></li>
                <li><h6>find us on GitHub</h6></li>
                <li><h6>Report an issue</h6></li>
                <li><h6>Contact Us</h6></li>
            </ul>
            <ul class='footerBlock' id='updates'>
                <li><h5>Updates</h5></li>
                <li><h6>Changelog</h6></li>
                <li><h6>News</h6></li>
            </ul>
        </ul>
    </div>
</footer>