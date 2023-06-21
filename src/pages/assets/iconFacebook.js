import * as React from "react";

const IconFacebook = ({
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
       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
 );

 export default IconFacebook