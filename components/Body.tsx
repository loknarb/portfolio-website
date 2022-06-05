import React from 'react';
import AboutSection from './AboutSection';
import CodeBlockSection from './CodeBlockSection';
import FocusSection from './FocusSection';
import GridPoints from './GridPoints';
import PhilosophySection from './PhilosophySection';
import ProjectSection from './ProjectSection';

const Body = () => {
  return (
    <>
      <CodeBlockSection />
      <GridPoints />
      <AboutSection />
      <FocusSection />
      <PhilosophySection />
      <ProjectSection />
    </>
  );
};

export default Body;
