import React from 'react';
import Header from './Header';
import './Home.css';
import Product from './Product';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img5 from './img/img5.png';
import img6 from './img/img6.png';
import img7 from './img/img7.png';

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="home__row">
        <Product id="1" title="HeadPhones, Yellow" price={21.95} image={img1} />
        <Product id="2" title="Plazma Tv" price={111.96} image={img2} />
        <Product id="3" title="Headphones Black" price={15.6} image={img3} />
      </div>
      <div className="home__row">
        <Product id="4" title="Mobile Phone" price={221.95} image={img4} />
        <Product id="5" title="Mixer/Blender" price={74.96} image={img5} />
        <Product id="6" title="Food Processor" price={415.6} image={img6} />
        <Product id="7" title="Remote Control" price={7.65} image={img7} />
      </div>
    </div>
  );
};

export default Home;
