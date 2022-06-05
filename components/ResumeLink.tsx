import React from 'react';
import PrimaryButton from './UI/PrimaryButton';

const ResumeLink = () => {
  return (
    <PrimaryButton>
      <a href='Resume_2022.pdf' target={'_blank'}>
        Resume/CV
      </a>
    </PrimaryButton>
  );
};

export default ResumeLink;
