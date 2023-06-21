import * as React from "react";

export const IconGit = ({
   size = 37,
   strokeWidth = 1.5,
   color = "#803ef9",
   ...props
}) => (
   <svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path d="M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5" />
      <path d="M9.25 19.503c-5 1.498-5-2.496-7-2.996" />
   </svg>
);

export const IconDemo = ({
   size = 37,
   strokeWidth = 1.5,
   color = "#803ef9",
   ...props
}) => (
   <svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
   </svg>
);


