// import React, { useEffect } from 'react';
// import '../styles/Home.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

// const Home: React.FC = () => {
//   useEffect(() => {
//     // Initialize the carousel when the component mounts
//     const script = document.createElement('script');
//     script.src = 'https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Clean up by removing the script when the component unmounts
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="container">
//       <h2>WELCOME TO BBK SERVICES</h2>

//       <div className="container" style={{ width: '600px', height: '340px', backgroundColor: 'green', marginLeft: '250px' }}>
//       <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
// import car1 from "../Assets/carwash1.jpg"
// import car2 from "../Assets/carwash2.jpg"
// import car3 from "../Assets/carwash3.jpg"
// import car4 from "../Assets/carwash4.jpg"
// const Home: React.FC = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js';
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const ExampleCarouselImage = ({ src, altText }: { src: string; altText: string }) => (
//     <img
//       className="d-block w-100"
//       src={car1}
//       alt="/"
//     />
    
//   );

//   return (
//     <div className="container">
//       <h2>WELCOME TO BBK SERVICES</h2>
//       <div
//         className="container"
//         style={{ width: '600px', height: '340px', backgroundColor: 'green', marginLeft: '250px' }}
//       >
//         <Carousel>
//           <Carousel.Item>
//             <ExampleCarouselImage src="url_of_your_first_image" altText="First slide" />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <ExampleCarouselImage src="url_of_your_second_image" altText="Second slide" />
//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <ExampleCarouselImage src="url_of_your_third_image" altText="Third slide" />
//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Home;

//-----------------------------------------------------------

// import React from 'react';
// import { useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
// import car1 from "../Assets/carwash1.jpg";
// import car2 from "../Assets/carwash2.jpg";
// import car3 from "../Assets/carwash3.jpg";
// import car4 from "../Assets/carwash4.jpg";

// const Home: React.FC = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js';
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const ExampleCarouselImage = ({ src, altText }: { src: string; altText: string }) => (
//     <img
//       className="d-block w-100"
//       src={src}
//       alt={altText}
//     />
//   );

//   return (
//     <div className="container">
//       <h2 style={{ textAlign: "center" }}>WELCOME TO BBK SERVICES</h2>

//       <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
//         <Carousel style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh' }}>
//           <Carousel.Item>
//             <ExampleCarouselImage src={car1} altText="Car 1" />
//             <Carousel.Caption>
//               <h3>Carwash</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <ExampleCarouselImage src={car2} altText="Car 2" />
//             <Carousel.Caption>
//               <h3>Carwash</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <ExampleCarouselImage src={car3} altText="Car 3" />
//             <Carousel.Caption>
//               <h3>Carwash</h3>
//               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <ExampleCarouselImage src={car4} altText="Car 4" />
//             <Carousel.Caption>
//               <h3>Carwash</h3>
//               <p>Vestibulum id ligula porta felis euismod semper.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Home;

//------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import car1 from '../Assets/pexels-carwash2.jpeg';
import car2 from '../Assets/pexelscarwash.jpeg';
import car3 from '../Assets/rr3.jpeg';
import car4 from '../Assets/rr2.jpeg';

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js';
    document.body.appendChild(script);

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval); // Clean up interval on unmount
      document.body.removeChild(script);
    };
  }, []);

  const ExampleCarouselImage = ({ src, altText }: { src: string; altText: string }) => (
    <img className="d-block w-100" src={src} alt={altText} style={{ objectFit: 'cover', width: '100vw', height: '100vh' }} />
  );

  return (
    <div className="container-fluid p-0">
      <h2 style={{ textAlign: 'center' }}>WELCOME TO BBK SERVICES</h2>

      <Carousel activeIndex={index} onSelect={() => {}}>
        <Carousel.Item>
          <ExampleCarouselImage src={car1} altText="Car 1" />
          <Carousel.Caption>
            <h3>Carwash</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={car2} altText="Car 2" />
          <Carousel.Caption>
            <h3>Carwash</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={car3} altText="Car 3" />
          <Carousel.Caption>
            <h3>Carwash</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={car4} altText="Car 4" />
          <Carousel.Caption>
            <h3>Carwash</h3>
            <p>Vestibulum id ligula porta felis euismod semper.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
