// import * as React from 'react';
// import { storiesOf } from '@storybook/react';
// import { boolean, number } from '@storybook/addon-knobs/react';

// import Carousel from './Carousel.component';
// import { wInfo } from '../storybook-utils';

// import '../../node_modules/slick-carousel/slick/slick.css';
// import '../../node_modules/slick-carousel/slick/slick-theme.css';

// storiesOf('Carousel', module).add(
//   'Carousel',
//   wInfo(`

//   ### Notes

//   This is a carousel. It is a wrappered version of the react-slick slider.

//   ### Usage
//   ~~~js
//   <Carousel
//     autoplay={true}
//     autoplaySpeed={5000}
//     arrows={true}
//     dots={true}
//     infinite={true}
//     transitionSpeed={500}
//     slidesToShow={1}
//     slidesToScroll={1}
//   >
//     <div>
//       <h3>001</h3>
//     </div>
//     <div>
//       <h3>002</h3>
//     </div>
//     <div>
//       <h3>003</h3>
//     </div>
//   </Carousel>
//   ~~~`)(() => {

//     const slideStyle: React.CSSProperties = {
//       backgroundColor: '#ddd',
//       padding: '20px',
//       textAlign: 'center' };

//     return (
//       <Carousel
//         autoplay={boolean('autoplay', true)}
//         autoplaySpeed={number('autoplaySpeed', 5000)}
//         arrows={boolean('arrows', true)}
//         dots={boolean('dots', true)}
//         infinite={boolean('infinite', true)}
//         transitionSpeed={number('transitionSpeed', 500)}
//         slidesToShow={number('slidesToShow', 1)}
//         slidesToScroll={number('slidesToScroll', 1)}
//       >
//         <div>
//           <h3 style={slideStyle}>001</h3>
//         </div>
//         <div>
//           <h3 style={slideStyle}>002</h3>
//         </div>
//         <div>
//           <h3 style={slideStyle}>003</h3>
//         </div>
//       </Carousel>
//     );
//   },
// ));
