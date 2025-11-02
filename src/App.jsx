import React from 'react';
import HeroCover from './components/HeroCover';
import CanShowcase from './components/CanShowcase';
import HypeFeatures from './components/HypeFeatures';
import FinalCTA from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-[Inter,system-ui,sans-serif]">
      <HeroCover />
      <CanShowcase />
      <HypeFeatures />
      <FinalCTA />
    </div>
  );
}
