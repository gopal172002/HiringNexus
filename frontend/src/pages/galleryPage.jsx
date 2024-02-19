import React from 'react';
import styled from 'styled-components';
import ImageDaal from '../images/daal1.jpg';
import AwlaCandy from '../images/Awlacandy.jpg';
import Farms from '../images/Farms.jpg';
import Headers from '../components/Layout/Header.jsx';
import Footer from '../components/Layout/Footer.jsx';
import Haldi from '../images/haldi.jpg';
import Haldi3 from '../images/haldi3.jpg';
import Haldi5 from '../images/Haldi5.jpg';
import HaldiChips from '../images/HaldiChips.jpg';
import MyPics from '../images/myPics.jpg';
import Nuts from '../images/nuts.jpg';
import OilRefining from '../images/oilrefining.jpg';
import OurPartners from '../images/ourpartners.jpg';
import Packets from '../images/packets.jpg';
import Turmeric from '../images/Turmeric.jpg';
import RaiHaldi from '../images/RaiHaldi.jpg';
import QualityCertificate from '../images/QualityCertificate.jpg';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Frame = styled.div`
  overflow: hidden;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 6px 6px 0 0;
`;

const Gallery = () => {
  const images = [
    QualityCertificate,
    ImageDaal,
    AwlaCandy,
    Farms,
    Haldi,
    Haldi3,
    Haldi5,
    HaldiChips,
    MyPics,
    Nuts,
    OilRefining,
    OurPartners,
    Packets,
    Turmeric,
    RaiHaldi,
  ];

  return (
    <div>
      <Headers activeheading={1} />
      <GalleryContainer>
        {images.map((image, index) => (
          <Frame key={index}>
            <ImageStyled src={image} alt={`Photo ${index + 1}`} />
          </Frame>
        ))}
      </GalleryContainer>
      <Footer />
    </div>
  );
};

export default Gallery;
