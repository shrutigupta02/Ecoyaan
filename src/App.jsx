import './App.css'
import ImageSlider from './ImageSlider';
import Foot from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ImageSlider/>
      <CardGrid/>
      <Foot/>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="logo">Ecoyaan</div>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Sell on Ecoyaan</a>
        <a href="#">Careers</a>
      </nav>
    </header>
  );
}

function Card({ title, description, media, isVideo }) {
  return (
    <div className="card">
      {isVideo ? (
        <video controls>
          <source src={media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={media} alt="" />
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      
    </div>
  );
}

function CardGrid() {
  return (
    <div className="cardGrid">
      <Card
        title="Join our community in creating a more sustainable future for everyone"
        description="At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products. Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment."
        media="/Media/Impact.png"
        isVideo={false}
      />
      <Card
        title="Carefully curated Eco-friendly products"
        description="We believe that every purchase you make can have a positive impact on the planet and the future. Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits."
        media="/Media/ProductCuration.mp4" 
        isVideo={true}
      />
      <Card
        title="For businesses that care deeply about sustainability"
        description="Do you run a business that is committed to sustainability in every aspect of your work? Do you want to showcase your products to an incredible audience of eco-conscious consumers who care? If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today"
        media="/Media/OurStory4.png" 
        isVideo={false}
      />
    </div>
  );
}


export default App
