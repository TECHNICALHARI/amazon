import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://wap.tigo.com.hn/sites/tigowebcorp.hn/files/amazon-prime-banner-junio2020.png"
          alt="Amazon Home Banner"
          className="home_banner"
        />
        <div className="home_row">
          <Product
            id="123456"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
          id="123457"
            title="TP-Link AC1750 Smart WiFi Router (Archer A7) - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control and QoS"
            price={56.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
          id="123458"
            title="New Apple iPhone 12 Pro (512GB, Pacific Blue) [Locked] + Carrier Subscription"
            price={2400}
            image="https://m.media-amazon.com/images/I/71DVgBTdyLL._FMwebp__.jpg"
            rating={5}
          />
          <Product
          id="123459"
          title="Swift Home Premium Bedding Set Collection 3-Piece Floral Ruched Pinch Pleat Pintuck Comforter Set - Full/Queen, Rose Blush"
          price={54.99}
          image="https://images-na.ssl-images-amazon.com/images/I/91gOlsTEFlL._AC_SL1500_.jpg"
          rating={4}
           />
          <Product
          id="1234510"
          title="Crayola Colored Pencils, Adult Coloring, Fun At Home Activities, 50 Count, Multicolor"
          price={10}
          image="https://images-na.ssl-images-amazon.com/images/I/71PVidNCWdL._AC_SL1500_.jpg"
          rating={3}
           />
        </div>
        <div className="home_row">
          <Product
          title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage) - Space Gray"
          price={2199}
          image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
          rating={5}
           />
        </div>
      </div>
    </div>
  );
}

export default Home;
