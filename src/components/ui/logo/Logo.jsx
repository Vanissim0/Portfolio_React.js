import React from "react";
import './style.css'

export default function Logo() {
  return (
    <a href="#">
      <svg
        width="135"
        height="40"
        viewBox="0 0 135 118"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo__svg"
      >
        <path
          d="M67.117 0.75L134.234 112.5L67.117 44L0 112.5L67.117 0.75Z"
          fill="#EBFE0C"
        />
        <path
          d="M67.117 25.5L134.234 112.5L67.117 56.75L0 112.5L67.117 25.5Z"
          fill="#F2530E"
        />
        <path d="M67 1V25.5L0 112.5L67 1Z" fill="#C5D510" />
        <path d="M67 25.5V57L0.5 112L67 25.5Z" fill="#5B1B00" />
        <path
          d="M67.117 117.75L0 6L67.117 74.5L134.234 6L67.117 117.75Z"
          fill="#F2530E"
        />
        <path
          d="M67.1171 93L0 6L67.117 61.75L134.234 6L67.1171 93Z"
          fill="#C5D510"
        />
        <path d="M0.5 6.5L67 93V117.5L0.5 6.5Z" fill="#8A2900" />
        <path d="M67 61.6653L0 6L67 93V61.6653Z" fill="#EBFE0C" />
      </svg>
    </a>
  );
}
