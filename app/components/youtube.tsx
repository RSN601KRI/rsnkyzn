// "use client";
// import { useEffect, useState } from "react";

// let YouTube: any = null;

// export function YouTubeComponent(props: any) {
//  const [mounted, setMounted] = useState(false);

//  useEffect(() => {
    // Dynamically import YouTube to avoid SSR issues
  //  (async () => {
  //    const mod = await import("react-youtube");
  //    YouTube = mod.default;
  //    setMounted(true);
  //  })();
  // }, []);

//  if (!mounted || !YouTube) return null;

//  return (
  //  <div className="relative w-full h-0 pb-[56.25%] my-6">
    //  <YouTube
  //      opts={{
//          height: "100%",
 //         width: "100%",
 //       }}
//        {...props}
//        className="absolute top-0 left-0 w-full h-full"
//      />
//    </div>
//  );
//}
