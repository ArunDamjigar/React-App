import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'


const slider = () => {
  return (

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider2}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Redmi A2 (Light Green, 2GB RAM 32GB ROM)</h3>
              <p>Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider1}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Tecno Phantom V Fold 5G Black (12GB RAM,256GB Storage)</h3>
              <p>The First Full Size Fold | LTPO AMOLED Display | 4nm D9000+ Fast Processor</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider3}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>OnePlus 10R 5G</h3>
              <p>Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider4}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>ASUS TUF Gaming A15, 15.6-inch (39.62 cms) </h3>
              <p>FHD 144Hz, AMD Ryzen 5 4600H, 4GB NVIDIA GeForce GTX 1650, Gaming Laptop (8GB/512GB SSD/Windows 11/Black/2.3 Kg)</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
   
    
   

}

export default slider