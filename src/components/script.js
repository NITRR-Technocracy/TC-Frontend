// import React, { useState, useEffect } from 'react';
// import gsap from 'gsap';


// const MyComponent = () => {
//   const [xPos, setXPos] = useState(0);
                                                          
//   useEffect(() => {
//     const imgElements = document.querySelectorAll('.img');

//     gsap.timeline()
//       .set('.ring', { rotationY: 180, cursor: 'grab' })
//       .set('.img', {
//         rotateY: (i) => i * -36,
//         transformOrigin: '50% 50% 500px',
//         z: -500,
//         backgroundImage: (i) => 'url(https://picsum.photos/id/' + (i + 32) + '/600/400/)',
//         backgroundPosition: (i) => getBgPos(i),
//         backfaceVisibility: 'hidden',
//       })
//       .from('.img', {
//         duration: 1.5,
//         y: 200,                                   // use this code with the carousel commented code 
//         opacity: 0,
//         stagger: 0.1,
//         ease: 'expo',
//       })
//       .add(() => {
//         imgElements.forEach((img) => {
//           img.addEventListener('mouseenter', handleMouseEnter);
//           img.addEventListener('mouseleave', handleMouseLeave);
//         });
//       }, '-=0.5');

//     window.addEventListener('mousedown', dragStart);
//     window.addEventListener('touchstart', dragStart);
//     window.addEventListener('mouseup', dragEnd);
//     window.addEventListener('touchend', dragEnd);

//     return () => {
//       imgElements.forEach((img) => {
//         img.removeEventListener('mouseenter', handleMouseEnter);
//         img.removeEventListener('mouseleave', handleMouseLeave);
//       });
//       window.removeEventListener('mousedown', dragStart);
//       window.removeEventListener('touchstart', dragStart);
//       window.removeEventListener('mouseup', dragEnd);
//       window.removeEventListener('touchend', dragEnd);
//     };
//   }, []);

//   const handleMouseEnter = (e) => {
//     const current = e.currentTarget;
//     gsap.to('.img', { opacity: (i, t) => (t === current ? 1 : 0.5), ease: 'power3' });
//   };

//   const handleMouseLeave = () => {
//     gsap.to('.img', { opacity: 1, ease: 'power2.inOut' });
//   };

//   const dragStart = (e) => {
//     if (e.touches) e.clientX = e.touches[0].clientX;
//     setXPos(Math.round(e.clientX));
//     gsap.set('.ring', { cursor: 'grabbing' });
//     window.addEventListener('mousemove', drag);
//     window.addEventListener('touchmove', drag);
//   };

//   const drag = (e) => {
//     if (e.touches) e.clientX = e.touches[0].clientX;
//     gsap.to('.ring', {
//       rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
//       onUpdate: () => {
//         gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) });
//       },
//     });
//     setXPos(Math.round(e.clientX));
//   };

//   const dragEnd = () => {
//     window.removeEventListener('mousemove', drag);
//     window.removeEventListener('touchmove', drag);
//     gsap.set('.ring', { cursor: 'grab' });
//   };

//   const getBgPos = (i) => {
//     return (
//       100 -
//       gsap.utils.wrap(0, 360, gsap.getProperty('.ring', 'rotationY') - 180 - i * 36) / 360 * 500 +
//       'px 0px'
//     );
//   };

//   return <div className="ring"> {/* You might need to wrap your content in a container */}
//     {/* Your content here */}
//   </div>;
// };

// export default MyComponent;
