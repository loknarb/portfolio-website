import React from 'react';
import dynamic from 'next/dynamic';
import CodeBlockSection from './CodeBlockSection';
import GridPoints from './GridPoints';
import AboutSection from './AboutSection';

// Lazy load below-fold sections
const FocusSection = dynamic(() => import('./FocusSection'));
const ProjectSection = dynamic(() => import('./ProjectSection'));
const PhilosophySection = dynamic(() => import('./PhilosophySection'));

const Body = () => {
  return (
    <>
      <CodeBlockSection />
      <GridPoints />
      <AboutSection />
      <FocusSection />
      <ProjectSection />
      <PhilosophySection />
    </>
  );
};

export default Body;
