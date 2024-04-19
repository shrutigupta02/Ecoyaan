import './App.css'

function Foot() {
  return (
    <div className="Foot">
      <Footer/>
      <Trademark/>
    </div>
  );
}

function Footer() {
    return (
      <footer>
        <div className="footerDiv">
          <div className="col">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Sell on Ecoyaan</li>
              <li>Careers</li>
            </ul>
          </div>
  
          <div className="col">
            <h3>Links</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of use</li>
            </ul>
          </div>
  
          <div className="col">
            <h3>Follow us</h3>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
  
          <div className="col">
            <p>Subscribe to receive updates on blogs, future launches and more!</p>
            <input type="text" placeholder="Your email address" />
            <p id="smallText">By subscribing, you agree to receive notifications <br /> <a href="#">Privacy Policy</a></p>
            <button>Subscribe</button>
          </div>
        </div>
   
        <div className="footerDiv">
          <div className="col">
            <h3>Registered Address</h3>
            <p>1-N-12T-781/1<br />
              Sri Krishna Vilasa, <br />
              Urvastores,<br />
              Ashoknagar(MR),<br />
              Mangalore, <br />
              Dakshina Kannada- 575006, <br />
              Karnataka, India<br /></p>
          </div>
  
          <div className="col">
            <h3>Contact Information</h3>
            <p>Kindkarma E-Retail Private Limited<br />
              <br />
              CIN: U47912KA2023PTC182592<br />
              Telephone: +91 9980490777<br />
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  function Trademark(){
    return(
      <div className="trademark">
          &copy; 2023 - 2024, Ecoyaan&#8482;
        </div>
    )
  }

  export default Foot