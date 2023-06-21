import * as React from "react";
const IconLinkedin = ({
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
       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
       <path d="M2 9h4v12H2z" />
       <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
    </svg>
 );

 export default IconLinkedin