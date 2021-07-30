import React from "react";

export const Heart = ({fill}) => {
  return (
    <svg className={"Heart"} xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 8 7" shapeRendering="crispEdges">
      <path stroke="#190004" d="M1 0h2M5 0h2M0 1h1M3 1h2M7 1h1M0 2h1M7 2h1M0 3h1M7 3h1M1 4h1M6 4h1M2 5h1M5 5h1M3 6h2" />
      <path stroke="#393232" d="M1 1h2M5 1h2M3 2h2" />
      <path stroke="#535353" d="M1 2h2M5 2h2M1 3h6M2 4h4M3 5h2" />

      {fill >= 0.5 && (<g>
        <path stroke="rgba(64,64,64,0.01568627450980392)" d="M2 0h1" />
        <path stroke="#ff3d89" d="M1 1h1M1 3h1M2 4h1M3 5h1" />
        <path stroke="#f8b1bb" d="M2 1h1M1 2h1M3 2h1M2 3h1" />
        <path stroke="rgba(255,0,64,0.01568627450980392)" d="M5 1h2M4 2h3M4 3h3M4 4h2M4 5h1" />
        <path stroke="#ff9dab" d="M2 2h1" />
        <path stroke="#ff0f32" d="M3 3h1M3 4h1" />
      </g>)}

      {fill === 1 && (<g>
        <path stroke="rgba(32,0,0,0.03137254901960784)" d="M5 0h1M7 1h1M7 2h1M7 3h1M6 4h1M3 6h2" />
        <path stroke="rgba(0,0,0,0.01568627450980392)" d="M6 0h1M4 1h1M5 5h1" />
        <path stroke="#ff0f32" d="M5 1h1M4 2h2M4 3h2M4 4h1" />
        <path stroke="#e20223" d="M6 1h1M6 2h1M6 3h1M5 4h1M4 5h1" />
      </g>)}
    </svg>
  )
};


export const Rupee = ({width}) => (
  <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 7 11" shapeRendering="crispEdges">
    <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
    <path stroke="#063823" d="M3 0h1M2 1h1M4 1h1M1 2h1M5 2h1M0 3h1M6 3h1M0 4h1M6 4h1M0 5h1M6 5h1M0 6h1M6 6h1M0 7h1M6 7h1M1 8h1M5 8h1M2 9h1M4 9h1M3 10h1" />
    <path stroke="#9aff54" d="M3 1h1M3 2h2M3 3h1M2 4h1M4 4h1M2 5h1M4 5h1M2 6h1M4 6h1M3 7h1M3 8h1" />
    <path stroke="#eafff6" d="M2 2h1M1 3h1M1 4h1M1 5h1M1 6h1M1 7h1M2 8h1" />
    <path stroke="#136743" d="M2 3h1M4 3h1M3 4h1M3 5h1M3 6h1M2 7h1M4 7h1" />
    <path stroke="#57c10e" d="M5 3h1M5 4h1M5 5h1M5 6h1M5 7h1M4 8h1M3 9h1" />
  </svg>
);


export const MagicJar = ({width}) => (
  <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 7 9" shapeRendering="crispEdges">
    <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
    <path stroke="#213d05" d="M2 0h3M1 1h1M5 1h1M2 2h1M4 2h1M2 3h1M4 3h1M2 4h1M4 4h1M1 5h1M5 5h1M0 6h1M6 6h1M1 7h1M5 7h1M2 8h3" />
    <path stroke="#c9ff94" d="M2 1h1M2 5h1M1 6h1" />
    <path stroke="#76e111" d="M3 1h2M3 2h1M4 5h1M3 6h2" />
    <path stroke="rgba(64,64,0,0.01568627450980392)" d="M1 2h1M5 2h1M5 3h1M5 4h1M0 5h1M6 5h1" />
    <path stroke="#c0be20" d="M3 3h1" />
    <path stroke="#fffc4d" d="M3 4h1" />
    <path stroke="#91f530" d="M3 5h1M2 6h1M2 7h1" />
    <path stroke="#5dc202" d="M5 6h1M3 7h2" />
  </svg>
);