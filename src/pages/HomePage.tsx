import React from 'react';
import {HeroSection} from '../components/home/HeroSection';
import { FeaturedCollections } from '../components/home/FeaturedCollections';
import { BestSellers } from '../components/home/BestSellers';
import { SocialProof } from '../components/home/SocialProof';
import { Collection } from '../components/home/Collactions';

export const HomePage: React.FC = () => {
  return (
    <div className="">
      <HeroSection />
      <Collection />
      <BestSellers />
      <FeaturedCollections />
      <SocialProof />

    </div>
  );
};