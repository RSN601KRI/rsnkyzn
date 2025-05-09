// 'use client';

// import { useEffect, useState } from 'react';
// import type { YouTubeProps } from 'react-youtube';

// export default function YouTubeComponent(props: YouTubeProps) {
//   const [YouTube, setYouTube] = useState<React.ComponentType<YouTubeProps> | null>(null);

//   useEffect(() => {
//     let isMounted = true;

//     import('react-youtube').then((mod) => {
//       if (isMounted) {
//         // ✅ Correct: Set the component directly, not as a function
//         setYouTube(mod.default);
//       }
//     });

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   if (!YouTube) return null;

//   return (
//     <div className="relative w-full h-0 pb-[56.25%] my-6">
//       <YouTube
//         {...props}
//         opts={{
//           height: '100%',
//           width: '100%',
//           ...(props?.opts || {}),
//         }}
//         className="absolute top-0 left-0 w-full h-full"
//       />
//     </div>
//   );
// }
