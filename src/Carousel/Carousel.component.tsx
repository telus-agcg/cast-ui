// import * as React from 'react';
// import Slider from 'react-slick';

// import './Carousel.css';

// type Props = {
//   /**
//    * Specify if the carousel should automatically begin scrolling
//    *
//    * @default true
//    **/
//   autoplay?: boolean;
//   /**
//    * Specify how long each slide is shown (in milliseconds)
//    *
//    * @default 5000
//    **/
//   autoplaySpeed?: number;
//   /**
//    * Specify if left/right slide arrows should display
//    *
//    * @default true
//    **/
//   arrows?: boolean;
//   /**
//    * Specify if navigation dots should display
//    *
//    * @default true
//    **/
//   dots?: boolean;
//   /**
//    * Specify if scrolling should be infinite
//    *
//    * @default true
//    **/
//   infinite?: boolean;
//   /**
//    * Specify the number of slides to show at once
//    *
//    * @default 1
//    **/
//   slidesToShow?: number;
//   /**
//    * Specify the number of slides to scroll at one time
//    *
//    * @default 1
//    **/
//   slidesToScroll?: number;
//   /**
//    * Specify how long a slide should take to transition in/out
//    *
//    * @default 500
//    **/
//   transitionSpeed?: number;
//   /**
//    * From theme provider
//    *
//    * @default defaultTheme
//    **/
//   theme?: any;
// };

// class Carousel extends React.Component<Props> {
//   constructor(props: Props) {
//     super(props);
//   }

//   static defaultProps = {
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: true,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   render() {
//     return (
//         <Slider
//           autoplay={this.props.autoplay}
//           autoplaySpeed={this.props.autoplaySpeed}
//           arrows={this.props.arrows}
//           dots={this.props.dots}
//           infinite={this.props.infinite}
//           speed={this.props.transitionSpeed}
//           slidesToShow={this.props.slidesToShow}
//           slidesToScroll={this.props.slidesToScroll}
//           className="tkxs-carousel"
//           >
//           {this.props.children}
//         </Slider>
//     );
//   }
// }

// export default Carousel;
