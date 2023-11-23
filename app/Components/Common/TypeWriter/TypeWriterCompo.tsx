"use client";
// import React from "react";
// import { Typewriter } from "react-simple-typewriter";

// interface LearnEarnTypeWriterProps {
//   content: any; // Using 'any' type for the 'content' prop
// }

// const LearnEarnTypeWriter: React.FC<LearnEarnTypeWriterProps> = ({
//   content,
// }) => {
//   return (
//     <div>
//       <Typewriter
//         words={[content]}
//         loop={0}
//         cursor
//         cursorStyle="|"
//         typeSpeed={10}
//         deleteSpeed={10}
//         delaySpeed={3000}
//       />
//     </div>
//   );
// };

// export default LearnEarnTypeWriter;

import React, { lazy, Suspense } from "react";
// import { Typewriter } from "react-simple-typewriter";
const Typewriter = lazy(() =>
  import("react-simple-typewriter").then((module) => ({
    default: module.Typewriter,
  }))
);
const TypeWriterCompo = (content: any) => {
  const Text = content.content;
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Typewriter
          words={[Text]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={10}
          deleteSpeed={10}
          delaySpeed={3000}
        />
      </Suspense>

      {/* <Suspense fallback={<div>Loading TypeWriter...</div>}> */}

      {/* </Suspense> */}
    </div>
  );
};

export default TypeWriterCompo;
