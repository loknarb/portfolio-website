import React from 'react';
import Image from 'next/image';
import Test from '../public/news-gallery-project.png';
import Test2 from '../public/state-management.png';
import Test3 from '../public/black_desktop.svg';
import MeGraph from './UI/MeGraph';
import BlackDesktop from './UI/BlackDesktop';
import ParagraphSimple from './UI/ParagraphSimple';
import H2Simple from './UI/H2Simple';
import FullLine from './UI/FullLine';
import CuteButtons from './UI/CuteButtons';
const Main = () => {
  return (
    <main className='pt-10 px-14'>
      <h1 className='text-4xl font-bold text-center font-body -tracking-wider'>
        Front-End Developer
      </h1>
      <div className='max-w-2xl my-6 -mx-8 bg-white rounded h-60'>
        <CuteButtons type='close' />
        <CuteButtons type='minimize' />
        <CuteButtons type='zoom' />
      </div>
      <H2Simple>About</H2Simple>
      <FullLine />
      <ParagraphSimple className='py-5'>
        Hey my name is Sebastien, I'm an American and currently live in Munich, Germany. By doing
        what I love the most, which is writing clean reusable code and designing simple modern
        things. I am passionate when it comes to solving problems, and coming up with creative and
        timely solutions.
      </ParagraphSimple>
      <MeGraph />
      <ParagraphSimple className='py-5'>
        I'm currently focused on using <span className='font-semibold'>React</span> with Typescript
        to actualize great ideas. A couple of my everyday tasks include writing reusable components,
        building SSR / SSA / Static apps, managing their state, writing tests to ensure code doesn’t
        break, and communicating with the Backend via REST, and Websocket API calls.
      </ParagraphSimple>
      <H2Simple>My Philosophy</H2Simple>
      <FullLine />
      <ParagraphSimple className='py-5'>
        I believe that when finding true happiness in life, one must always seek and explore new
        ideas and not be afraid to experiment! That's why I'm not afraid with any challenge brought
        to me.
      </ParagraphSimple>
      <BlackDesktop />
      <H2Simple>Projects</H2Simple>
      <div>
        <Image src={Test} />
      </div>
      <div>
        <Image src={Test2} />
      </div>
    </main>
  );
};

export default Main;
