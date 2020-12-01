import React from "react";
import PropTypes from "prop-types";

function fillTypeHands(index){
  if (index === 5){
    return "white";
  }
}

function fillTypeHead(index){
  if (index === 4){
    return "white";
  }
}

function fillTypeLegs(index){
  if (index === 3){
    return "white";
  }
}

function fillTypeArms(index){
  if (index === 2){
    return "white"
  }
}

function fillTypeTorso(index){
  if (index === 1){
    return "white";
  }
}

function fillTypeEyes(index){
  if (index === 0) {
    return "white";
  }
}

function BodyTypeSVG(props) {
  return (
    <React.Fragment>
        <svg id="humanBody" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.01 670.46">
        <svg id="3" onClick={props.onBodyClick} style={{fill: fillTypeLegs(props.currentIndex)}} className="legs">
          <path d="M358.42,335.34c9,38.07,3.8,74.88-2.55,111.66h-1.21c0-1.12,0-2.24,0-3.36,0-17.31-.06-34.61-0.15-51.92,0-7.9-.78-15.82-0.25-23.68,0.68-10.24,2.3-20.42,3.53-30.62A18,18,0,0,1,358.42,335.34Z" transform="translate(-146.36 -60.33)"/>
          <path d="M260.14,344.68a17.7,17.7,0,0,1,1.68,2.95q12.06,35.26,24,70.55a87.89,87.89,0,0,1,4.39,24.48c0.3,6.68.46,13.36,0.55,20,0.28,19.6-4,38-14.73,54.61a75.69,75.69,0,0,1-5.32,7.93c-0.3-3.84-.44-7.69-0.93-11.5-2.49-19.32-5.3-38.61-7.52-58a294.37,294.37,0,0,1-1.86-30.57c-0.17-16.83.46-33.66,0.38-50.49,0-8.16-1-16.3-1.44-24.46-0.1-1.73,0-3.47,0-5.21Z" transform="translate(-146.36 -60.33)"/>
          <path d="M342.07,525.65c-7.3-12-14.33-23.36-17.31-36.55a86.37,86.37,0,0,1-1.83-14c-0.43-7.5-.57-15-0.62-22.54-0.11-15.89,3.31-31.06,8.75-46,7.06-19.39,13.44-39,20.15-58.54a28.75,28.75,0,0,1,1.62-3.3l1,0.2a35.28,35.28,0,0,1,0,3.92c-1.86,16.48-1.61,33-1.21,49.54,0.55,22.94.25,45.82-3.32,68.63-3,18.86-4.67,37.91-6.93,56.88C342.28,524.22,342.22,524.57,342.07,525.65Z" transform="translate(-146.36 -60.33)"/>
          <path d="M279.68,518c-0.28,3.94-.79,7.88-0.78,11.82,0,9-.35,18,0.59,27,1.65,15.52,4.14,31,6.33,46.42,1.41,10,2.93,19.92,4.41,29.87a1.31,1.31,0,0,0,.79.94c-5.75-29.11.81-57.46,4.53-86.46a4.24,4.24,0,0,1,1.19,1c1.94,7,4.43,14,5.58,21.19,0.88,5.48.52,11.28-.08,16.85-1.33,12.42-3.3,24.78-4.72,37.2a87.41,87.41,0,0,0-.51,15.77c0.22,3.3,1.93,6.49,2.87,9.75,1.44,5,2.84,9.95,4.13,15a5.92,5.92,0,0,1-.49,2.48,8.1,8.1,0,0,0-.51,1.94c0.17,6.21.41,12.42,0.6,18.64a7.39,7.39,0,0,1-.8,1.9,28.33,28.33,0,0,1-1.49-3.71,27.82,27.82,0,0,0-11.69-17.24c-6.58-4.57-7.77-11.14-6.91-18.47a15,15,0,0,1,1-2.63c4,6.61,9.3,11.25,14.42,16.06l0.66-.62a48.64,48.64,0,0,0-4.82-5.42c-7.15-6-10.78-14.16-14.14-22.53a253.88,253.88,0,0,1-13.09-43.52c-4.66-22.75-2.78-44.92,7.59-66,1.27-2.58,2.85-5,4.28-7.51Z" transform="translate(-146.36 -60.33)"/>
          <path d="M310.77,666.64c-2.87.36-1.95-1.75-1.61-2.89,1.85-6.36,3.91-12.66,5.81-19a18,18,0,0,0,1.18-5.91c-0.53-9.23-1.15-18.46-2.07-27.65-1.19-11.85-2.81-23.66-4-35.51-0.61-6.06,2.23-11.53,3.69-17.23A79.36,79.36,0,0,1,317,547.91c4.57,29.52,11.08,58.88,4.14,89l1.14,0c1.11-6.34,2.4-12.64,3.28-19,2.32-16.84,4.28-33.72,6.75-50.54a190.26,190.26,0,0,0,2.19-35.48c-0.14-3.32-.66-6.62-0.92-9.94a9.79,9.79,0,0,1,.55-4.28,35.84,35.84,0,0,1,2.07,2.95,97.3,97.3,0,0,1,12.2,41.43c1.29,17.48-2.63,34.06-7.77,50.41-3.29,10.47-7.43,20.67-11.47,30.89-2.14,5.41-5.87,9.79-10.15,13.77-2.19,2-3.81,4.67-5.68,7Z" transform="translate(-146.36 -60.33)"/>
          <path d="M286.58,590.54c-0.55-2.91-1.25-5.79-1.62-8.72-1.31-10.38-2.65-20.76-3.68-31.18-0.59-6-1.43-12.09-.67-17.95,1.29-9.95,3.73-19.75,5.79-29.59,0.2-.94,1.08-1.74,1.65-2.6h1a91.75,91.75,0,0,1,3.1,9.24c2.09,9.25,3.66,18.62,3,28.13-0.31,4.59-1.66,9.1-2.3,13.68-1.51,10.73-2.88,21.48-4.32,32.23-0.3,2.23-.65,4.45-1,6.67Z" transform="translate(-146.36 -60.33)"/>
          <path d="M325.51,590.66q-0.75-5.29-1.49-10.59c-1.72-12.11-3.18-24.26-5.24-36.31-2.38-13.93.38-27.21,4.22-40.41,0.27-.92,1.23-1.64,1.88-2.45a9.79,9.79,0,0,1,1.89,2.53c4.37,13.85,7.11,28,5.69,42.55-1.36,13.95-3.53,27.82-5.37,41.72a23.09,23.09,0,0,1-.81,3Z" transform="translate(-146.36 -60.33)"/>
          <path d="M311.3,453.85c-0.4-4.94-1-9.87-1.18-14.82-0.67-17.35-1.14-34.71-1.85-52.06-0.12-3,1.1-4.73,3.29-6.49,8.44-6.79,16.94-13.54,25-20.75,4-3.54,7-8.08,10.53-12.16,0.55-.65,1.13-1.27,1.7-1.9l0.65,0.33c-0.13.85-.19,1.7-0.39,2.53-3.11,13.42-9.07,25.83-13.7,38.72-7.71,21.44-15,43-22.5,64.53-0.26.74-.53,1.47-0.8,2.21Z" transform="translate(-146.36 -60.33)"/>
          <path d="M315.38,534.57c-9.75-16.6-7.41-79.77,3.59-93,0.11,1.82.27,3.24,0.28,4.65,0,5.76-.32,11.55.1,17.29,0.75,10.12,2,20.2,2.93,30.3a12.65,12.65,0,0,1-.42,5.4,93.15,93.15,0,0,0-5.44,25.68c-0.2,2.58-.32,5.17-0.52,7.75A11.42,11.42,0,0,1,315.38,534.57Z" transform="translate(-146.36 -60.33)"/>
          <path d="M293.84,442.6c11.48,14.23,13.65,76.76,3.65,92.09-0.31-3.93-.51-7.47-0.89-11-0.87-8.07-2-16.08-5.15-23.69a11.12,11.12,0,0,1-.85-6.16c3.07-14.31,3.56-28.78,3.24-43.32C293.79,447.89,293.84,445.24,293.84,442.6Z" transform="translate(-146.36 -60.33)"/>
          <path d="M255.06,335.5c0.35,2,.76,4,1,6.05a282.32,282.32,0,0,1,2.84,45c-0.51,19.78-.35,39.58-0.48,59.37a3,3,0,0,1-.67,2,11.27,11.27,0,0,1-.74-2.08c-1.72-11.36-3.57-22.7-5-34.09-0.85-6.61-1.16-13.3-1.57-20-0.35-5.72-.44-11.45-0.73-17.17-0.46-9,1.42-17.67,2.54-26.47,0.43-3.4.91-6.79,1.4-10.19,0.12-.83.34-1.64,0.51-2.46h0.92Z" transform="translate(-146.36 -60.33)"/>
          <path d="M301,454.22c-0.45-1.43-.91-2.86-1.35-4.3q-12.41-40.31-28.42-79.33c-2.9-7.1-4.78-14.63-7.1-22a22,22,0,0,1-.5-2.59l1.31-1.07a7.44,7.44,0,0,0,.67,2.15c7.35,10.42,16.61,18.93,26.7,26.61,3.53,2.69,7.17,5.23,10.62,8a4.67,4.67,0,0,1,1.74,3.13q-0.31,18.51-.94,37c-0.27,7.78-.77,15.56-1.22,23.34-0.17,3-.51,6-0.77,8.95Z" transform="translate(-146.36 -60.33)"/>
          <path d="M301.89,712.7c-2.21-3.23-4.12-6.74-6.72-9.62a71.41,71.41,0,0,0-9-7.83c-3.25-2.57-5-5.22-3.52-9.76a38.37,38.37,0,0,0,1.72-18.63,6.14,6.14,0,0,1,1.7.58c8.91,7.24,15.12,16.34,17.14,27.68,1,5.41.37,11.1,0.43,16.67,0,1.46-.78,1.47-1.79.76Z" transform="translate(-146.36 -60.33)"/>
          <path d="M332.44,691.9a80.68,80.68,0,0,1,2.85,9.24c0.71,3.78,1.43,7.73,1,11.48-0.24,2.06-2.64,4.06-4.42,5.7a44.11,44.11,0,0,1-6.32,4.44c-2.39,1.52-4.87.41-5.31-2.31-0.64-3.93-1.28-7.85-1.8-11.8-0.35-2.67,1.07-4.6,3-6.22,3.77-3.16,8.63-5.21,10.15-10.65Z" transform="translate(-146.36 -60.33)"/>
          <path d="M295,709.49c-0.78,4.1-1.47,8.21-2.37,12.28-0.37,1.69-3.5,2.2-5.26.81-3.23-2.56-6.44-5.16-9.46-8-0.74-.68-0.92-2.18-1-3.33a40,40,0,0,1,2.86-16.77,13.07,13.07,0,0,1,1-1.76c0.52,0.45,1,.9,1.55,1.37,2.93,2.67,5.72,5.51,8.81,8C293.58,704,295,706.22,295,709.49Z" transform="translate(-146.36 -60.33)"/>
          <path d="M301.89,712.7l-0.06-.16c2.07,4.75,2.45,9.74,2.34,14.86-0.06,2.55-1,3.5-3.49,3.37-4-.2-5.84-1.88-5.54-5.78,0.44-5.67,1.23-11.31,1.94-17.61Z" transform="translate(-146.36 -60.33)"/>
          <path d="M310.77,666.64l2.6-2.47a64.89,64.89,0,0,0,15.53-16.46,3.42,3.42,0,0,1,.91.54c2.13,5,.65,13.12-3.15,16.85a51,51,0,0,1-5.79,5.18c-5.59,4-7.64,10-9.42,16.17a5.47,5.47,0,0,1-1.32,2.43C309.32,681.42,308.47,674,310.77,666.64Z" transform="translate(-146.36 -60.33)"/>
          <path d="M316.09,707.55c0.71,6.43,1.37,12.54,2.08,18.64,0.24,2-.59,3.39-2.48,3.67a34.05,34.05,0,0,1-6.14.06,1.56,1.56,0,0,1-.6-1.15c-0.31-7.53.37-14.79,6-20.56A5.81,5.81,0,0,1,316.09,707.55Z" transform="translate(-146.36 -60.33)"/>
          <path d="M309.89,713.26c-1.67-11.59-.24-22.09,4.71-31.89,3.07-6.09,8.93-9.79,13.66-14.53-0.66,7,.53,13.51,2.4,19.92a5.79,5.79,0,0,1-1.91,6.67c-2.32,2-4.9,3.72-7,5.92-3.47,3.65-6.64,7.58-9.93,11.4C311.26,711.42,310.76,712.14,309.89,713.26Z" transform="translate(-146.36 -60.33)"/>
        </svg>

        <svg id="1" onClick={props.onBodyClick} style={{fill: fillTypeTorso(props.currentIndex)}} className="torso">
        <path d="M254.74,167.82c-0.64-1.44-.41-2.26,1.4-2.36,2.93-.16,5.65.11,8.17,1.91,5.71,4.08,12.75,4.66,19.1,7.06,4.23,1.6,8.49,3.1,12.65,4.86,5.24,2.21,7.56,6.68,8.07,12,0.48,5,.43,10,0.63,15,0.47,12.17-8.06,24.32-24.72,23-8.22-.67-15.12-3.83-21.59-8.47-2.48-1.78-4.82-3.75-7.28-5.56s-2.77-4.46-1.63-6.93c2.16-4.68,4.83-9.13,7.06-13.78,2.63-5.5,5.09-11.09,7.43-16.72a4.52,4.52,0,0,0-.45-3.43,12.09,12.09,0,0,0-8.11-6.23Z" transform="translate(-146.36 -60.33)"/>
        <path d="M357.53,168.16c-2.62,1.93-5.51,3.61-7.74,5.93-0.86.89-.79,3.5-0.15,4.87,3.8,8.21,7.88,16.29,11.86,24.42a41,41,0,0,1,1.8,3.74c1.21,3.26,1.2,6.19-1.93,8.63-7.09,5.52-14,11.45-23.25,12.86s-18,1.45-24.59-6.84a21.4,21.4,0,0,1-5.07-13.26,180.3,180.3,0,0,1,1-18.86,12,12,0,0,1,7.76-10.42c7.55-2.94,15.32-5.33,22.93-8.13a45.73,45.73,0,0,0,9.23-4.27c2.56-1.66,5.11-1.4,7.73-1.21,0.48,0,.85,1.41,1.28,2.17Z" transform="translate(-146.36 -60.33)"/>
        <path d="M290.75,362.09c-1.32-3.25-2.73-6.46-3.94-9.75a122,122,0,0,1-6.9-31.43c-0.22-2.48-.6-4.94-0.74-7.42a15.88,15.88,0,0,1,.56-3.35c-10.79-1.8-15.72-10.15-19.67-19.22a8.67,8.67,0,0,1,1.29-8.95c3.5-4.18,7.33-8.09,11.07-12.05,0.38-.4,1.14-0.45,2.51-0.94-0.63,3.35-1.21,6.15-1.68,9-1.36,8.24-1.73,16.43,2.48,24a55.89,55.89,0,0,0,5.19,7.11,2.44,2.44,0,0,0,1.7.53c6.71,0.07,12.92,2.28,19,4.72a4.7,4.7,0,0,1,2.41,3.26c0.83,7.81,1.72,15.65,1.94,23.49,0.29,10,0,20.08-.09,30.12,0,0.54-.1,1.09-0.18,1.93a15.71,15.71,0,0,1-11.32-6.27l-3.67-4.82Z" transform="translate(-146.36 -60.33)"/>
        <path d="M322.13,362.54c-1.11,1.42-2.22,2.84-3.31,4.27a16,16,0,0,1-11.56,6.28c0-1.78,0-3.25,0-4.72,0-10.89-.17-21.78.09-32.65,0.14-5.91,1.07-11.81,1.55-17.72a4.37,4.37,0,0,1,3.44-4.14c6.07-1.94,12-4.49,18.57-4.24a2.15,2.15,0,0,0,1.51-.44c5.07-5.55,8.53-11.93,8.21-19.6-0.24-5.86-1.28-11.69-2-17.54-0.09-.81-0.13-1.63-0.24-3.06a16.2,16.2,0,0,1,3.34,1.92c3.13,3.16,6.29,6.31,9.16,9.7,3.26,3.85,3.38,8.31,1.26,12.72-2.67,5.56-6.06,10.66-11.49,13.92a53,53,0,0,1-6.54,2.93c-0.49,5.66-.53,11.33-1.56,16.82-1.5,8.05-3.48,16-5.7,23.93-1.13,4-3.21,7.82-4.86,11.72Z" transform="translate(-146.36 -60.33)"/>
        <path d="M322,362.63c1.92-3.53,4.36-6.88,5.65-10.63,2.86-8.35,5.36-16.83,7.56-25.38,0.93-3.62.83-7.52,1-11.3a5.45,5.45,0,0,1,3-5.15,34.65,34.65,0,0,0,13.83-14.44,6.07,6.07,0,0,1,1.5-1.35,3.75,3.75,0,0,1,1,1.18c2.54,10.43,5.49,21,1.6,31.59a75,75,0,0,1-23,32.5,94.71,94.71,0,0,1-9,6.36c-1,.64-2.36.7-4.17,1.2l1.2-4.68Z" transform="translate(-146.36 -60.33)"/>
        <path d="M307.14,297.29c0.25-4.81.46-9.63,0.76-14.44a3.27,3.27,0,0,1,3.43-3.31c8.08-.45,15.88.3,23.07,4.6,2.41,1.44,3.37,3.29,2.68,5.71a117.18,117.18,0,0,1-4.82,14.35c-0.72,1.66-2.9,3.19-4.73,3.77-4.82,1.55-9.83,2.5-14.75,3.78-3.83,1-5.28,0-5.3-3.85,0-3.54,0-7.07,0-10.61Z" transform="translate(-146.36 -60.33)"/>
        <path d="M305.35,290.24c0,6.13,0,12.26,0,18.39,0,2.81-1.73,4-4.45,3.26-5.57-1.45-11.16-2.83-16.7-4.38a5,5,0,0,1-2.59-1.88c-3.43-5.23-5-11.09-5.65-17.26a3.46,3.46,0,0,1,1.92-3.59c7.39-4.81,15.61-5.63,24.07-5a3.81,3.81,0,0,1,2.66,2.28,73.72,73.72,0,0,1,1.4,8.19Z" transform="translate(-146.36 -60.33)"/><path d="M290.75,362.09l0,0,1.63,5.37c-2.58-.93-4.62-1.23-6.15-2.28-15.07-10.25-26.06-23.74-30.92-41.46-1.29-4.71-.64-10.06-0.34-15.08,0.22-3.72,1.27-7.4,2.06-11.07a19.59,19.59,0,0,1,1.3-3.23c3.38,4.06,6.33,7.92,9.63,11.46a24.2,24.2,0,0,0,6,4.4,5.09,5.09,0,0,1,3,4.86c-0.1,16,5.37,30.51,12.12,44.65A15.75,15.75,0,0,0,290.75,362.09Z" transform="translate(-146.36 -60.33)"/>
        <path d="M356,287.71c-1.17-5.76-4.26-10.13-8.27-14-1.68-1.61-3.21-3.36-4.86-5-4.7-4.68-5.29-11-6.61-17-1.23-5.56-2.31-11.16-3.19-16.79-0.17-1.1.65-3.22,1.39-3.42a14.57,14.57,0,0,1,5.81,0c0.7,0.11,1.43,1.18,1.83,2,4.62,9.13,9.43,18.18,13.68,27.49a42.74,42.74,0,0,1,3.68,19.7C359.37,284.1,358.33,286.42,356,287.71Z" transform="translate(-146.36 -60.33)"/>
        <path d="M257,288c-3.1-1.89-3.16-4.77-3.3-7.21a47.23,47.23,0,0,1,5.4-24c3.79-7.58,7.8-15,11.64-22.6,1.56-3.06,3.81-4.26,7-3.27a3.16,3.16,0,0,1,2.38,3.88c-1.84,9.17-3.29,18.46-5.92,27.41-1.09,3.7-4.48,6.94-7.36,9.86C262.46,276.56,258.47,281.17,257,288Z" transform="translate(-146.36 -60.33)"/>
        <path d="M276.07,282.87A42.27,42.27,0,0,1,278,265.26a6.48,6.48,0,0,1,1.9-2.68,28.37,28.37,0,0,1,22.93-7.06,3.56,3.56,0,0,1,2.42,2.41c0.26,5.64.2,11.3,0.25,17,0,1.55-.84,2.11-2.3,2.09-2.7,0-5.4.07-8.09,0a28.07,28.07,0,0,0-16.32,4.73A20.18,20.18,0,0,1,276.07,282.87Z" transform="translate(-146.36 -60.33)"/>
        <path d="M337.76,282.66c-1.41-.19-2.19-0.07-2.62-0.4-6.21-4.71-13.38-5.45-20.85-5.31-6.81.13-6.92,0-7-6.84,0-4,.3-8,0.49-11.95,0.08-1.74.94-2.61,2.77-2.8a28.35,28.35,0,0,1,21.33,6.13,10.76,10.76,0,0,1,3.78,5.53C336.73,272,337.08,277.19,337.76,282.66Z" transform="translate(-146.36 -60.33)"/>
        <path d="M335.33,260.07c-1.89-1-3.3-1.87-4.76-2.57A48.25,48.25,0,0,0,312,252.39c-4.18-.21-4.62-0.71-4.58-4.82,0-3.15-.52-6.54.44-9.4,1.2-3.55,3.63-6.7,5.7-9.92,0.25-.39,1.65-0.37,2.35-0.1a113.91,113.91,0,0,1,10.76,4.43,7.1,7.1,0,0,1,3.56,3.69c2,7.1,3.56,14.32,5.24,21.5A11,11,0,0,1,335.33,260.07Z" transform="translate(-146.36 -60.33)"/>
        <path d="M277.18,259.35q1.5-7.43,3-14.85c0.15-.72.48-1.41,0.58-2.14,0.84-6.71,5.07-10.35,11.11-12.43,8.17-2.82,6.85-3.05,11.67,3.83,2.73,3.9,2.09,8.32,2.19,12.61,0.13,5.38-.12,5.46-5.48,6a43.34,43.34,0,0,0-18.15,5.55c-1.24.74-2.58,1.31-3.87,2Z" transform="translate(-146.36 -60.33)"/>
        <path d="M300.65,177.25a37.14,37.14,0,0,0,5.9,1,37,37,0,0,0,5.91-1l-5.91,11.1Z" transform="translate(-146.36 -60.33)"/>
        <path d="M360.07,222.62c2,15.6,2.47,30.67-.08,46a21.33,21.33,0,0,1-1.19-2.48,122.69,122.69,0,0,0-11.72-25.94,16.37,16.37,0,0,1-1.67-4.39c-0.93-3.47-.27-5,2.79-6.95,2.34-1.49,4.65-3.06,7.07-4.4A35.68,35.68,0,0,1,360.07,222.62Z" transform="translate(-146.36 -60.33)"/>
        <path d="M313.44,224.32c-2,2.88-3.93,5.65-6,8.26-0.23.29-2-.14-2.54-0.73a22,22,0,0,1-3.62-5.5,7.85,7.85,0,0,1,0-4.5c0.29-1.2,1.3-2.21,1.9-3.35,1.9-3.61,3.94-4.4,6.69,0C311,220.25,312.06,222,313.44,224.32Z" transform="translate(-146.36 -60.33)"/>
        <path d="M363.81,257.2c-0.06-.78-0.16-1.55-0.17-2.33-0.2-8.33-.34-16.67-0.62-25a27.43,27.43,0,0,0-.94-6c-0.69-2.61.26-4,3-4.85,4.36,12.91.92,25.51-.43,38.15Z" transform="translate(-146.36 -60.33)"/>
        <path d="M249.32,257.59c-3.21-5.78-4-31.35-1.37-38.24,3,0.34,3.32,1.2,3,4.19-0.67,5.78-1.11,11.6-1.39,17.42-0.22,4.54,0,9.09-.05,13.64C249.48,255.47,249.39,256.34,249.32,257.59Z" transform="translate(-146.36 -60.33)"/>
        <path d="M253.19,268.46a194.48,194.48,0,0,1-.2-45.73,28,28,0,0,1,4.54,1.54,81.82,81.82,0,0,1,7.77,4.85c3.08,2.21,3.5,3.93,1.92,7.36-3.12,6.79-6.42,13.5-9.49,20.32-1.28,2.85-2.16,5.88-3.26,8.81C254.1,266.59,253.62,267.52,253.19,268.46Z" transform="translate(-146.36 -60.33)"/>
        <path d="M301.67,167.14c-0.45-11.29-8-18.92-14-27.55,3.46,0.81,7.41,1.53,9.08,4.39,5,8.58,8.19,17.86,7.54,28.06a19.17,19.17,0,0,1-.4,2c-1.86-1-3.7-1.67-5.07-2.85A55,55,0,0,1,285,153.64a5.15,5.15,0,0,1-.56-2.4c0.17-3.38.47-6.76,0.75-10.59C292.75,148.48,298.4,157,301.67,167.14Z" transform="translate(-146.36 -60.33)"/>
        <path d="M309.28,174.42a27.2,27.2,0,0,1,.82-14.85c1.38-4.59,3.39-9,5-13.5a7.35,7.35,0,0,1,4.35-4.35c2.24-1,4.38-2.19,7-3.53a6.64,6.64,0,0,1-.61,2c-3.66,4.88-7.69,9.51-10.94,14.64-1.93,3.05-2.64,6.88-3.35,10.6,3.33-9.21,9.12-16.67,16-24.06,0.83,6.09,2.29,11.68-2.08,16.71-3.46,4-6.59,8.26-10.14,12.16C313.91,171.81,311.71,172.78,309.28,174.42Z" transform="translate(-146.36 -60.33)"/>
        <path d="M350.22,164.08c-10.9,8.29-24.17,7.94-35.94,12.26l-0.53-.86a12,12,0,0,1,1.38-2.18c5.21-5.3,10.6-10.43,14-17.21,0.28-.56,2.06-1,2.78-0.63C337.92,158.15,343.83,161,350.22,164.08Z" transform="translate(-146.36 -60.33)"/>
        <path d="M298.87,176.35c-11.76-4.3-25-4-36.07-12.32,2.15-1,3.93-1.8,5.7-2.63,4.11-1.93,8.22-3.85,12.31-5.82,1.44-.69,2.65-0.88,3.46.83,3,6.43,8.11,11.22,13,16.16,0.8,0.81,1.47,1.76,2.21,2.64Z" transform="translate(-146.36 -60.33)"/>
        </svg>
        <svg id="2" onClick={props.onBodyClick} style={{fill: fillTypeArms(props.currentIndex)}} className="arms">
        <path d="M399.21,293.74c10.06,21.26,19.82,63.38,17.28,77a17.55,17.55,0,0,1-1.93-2.74q-5.94-14.61-11.78-29.26L389,304.35c-2.26-5.64-4.38-11.34-6.84-16.89a23.85,23.85,0,0,1-1.66-12.5c0.1-.94.88-2.43,1.55-2.55s2.05,0.71,2.69,1.48c4.29,5.2,8.46,10.5,12.88,15.71a34.5,34.5,0,0,0-2.28-4.12c-14.36-19.34-19.72-41.89-23.14-65.11-0.36-2.41-1.39-5.47,1.25-7.26s5.23-.2,7.66.85c11.31,4.87,17.45,13.82,18.46,25.76,1.1,13,1.25,26.14,1.68,39.22a81.24,81.24,0,0,1-.48,10.29C400.61,290.6,399.86,291.91,399.21,293.74Z" transform="translate(-146.36 -60.33)"/>
        <path d="M214.46,292.09c-1.92.77-2.09-.69-2.11-1.87-0.18-9.83-.56-19.67-0.32-29.5a194.06,194.06,0,0,1,1.9-23.26c1.78-12.19,9.08-20.22,20.51-24.41,4.53-1.66,7.13-.39,6.71,4.87a147.36,147.36,0,0,1-6.37,31.82c-1.37,4.42-3,8.77-4.5,13.14a66,66,0,0,1-9.43,17.86,73.42,73.42,0,0,0-4.46,7.65Z" transform="translate(-146.36 -60.33)"/>
        <path d="M357.53,168.16l0.87-.36c2.06,0.34,4.23.37,6.16,1.07a59.17,59.17,0,0,1,17.87,10.35A29.76,29.76,0,0,1,392,194.73a98.53,98.53,0,0,1,3.34,24.11,3,3,0,0,1-1.3-.09c-4.43-4.2-10.14-6-15.61-8.11-13.79-5.37-22.32-15.28-26.26-29.4-1.76-6.29-1.16-8.14,4.17-12A15,15,0,0,0,357.53,168.16Z" transform="translate(-146.36 -60.33)"/>
        <path d="M254.74,167.82l0.74,0.32c0.42,0.35.81,0.74,1.25,1.06,6.24,4.45,6.46,5.07,4.12,12.47-2,6.42-4.56,12.74-9.34,17.55A63.42,63.42,0,0,1,240,207.81c-3.19,2-6.87,3.17-10.22,4.91s-6.72,3.8-10.08,5.69a24.59,24.59,0,0,1-2.39.91c0.91-6.82,1.6-13,2.6-19.16,1-5.89,2.65-11.61,6.48-16.35,6.53-8.1,15.53-12.46,25-15.91A10.7,10.7,0,0,1,254.74,167.82Z" transform="translate(-146.36 -60.33)"/>
        <path d="M214.46,292.09l1.93-3.69c2.58-3.22,5.15-6.44,7.75-9.65a57.8,57.8,0,0,1,4.14-4.86,12.23,12.23,0,0,1,3-1.64,11,11,0,0,1,1.39,3.13,25.08,25.08,0,0,1-2,12.7c-3,7-5.37,14.25-8.24,21.31-4.62,11.35-9.49,22.6-14.15,33.94-3.4,8.28-6.62,16.64-9.95,25a8.13,8.13,0,0,1-1.17,1.62c-0.35-.66-1-1.34-1-2,0.32-5.16.64-10.33,1.23-15.46,2.15-18.52,7.82-36.11,14.28-53.48C212.54,296.65,213.53,294.38,214.46,292.09Z" transform="translate(-146.36 -60.33)"/>
        <path d="M176.94,355.2c1-2.33,2.06-4.64,3-7a128.49,128.49,0,0,0,10.09-40.5,72.14,72.14,0,0,1,13.65-37.11c2.43-3.37,3.8-3.08,5.53.72,2.91,6.4,1.67,13,.87,19.48a101.83,101.83,0,0,1-14.33,40.4c-4.49,7.44-9.62,14.49-14.58,21.65a20,20,0,0,1-3.33,3.05Z" transform="translate(-146.36 -60.33)"/>
        <path d="M435.6,356.31a43.51,43.51,0,0,1-4-3.86c-11.33-13.87-20.17-29.17-25.38-46.35a82.61,82.61,0,0,1-3.94-28.32c0.14-2.66,1.31-5.33,2.34-7.87,0.88-2.18,2.34-2.44,3.74-.56a101.14,101.14,0,0,1,6.58,10.16,61.51,61.51,0,0,1,7.64,24.87c1.38,14.45,4,28.56,9.7,42,1.32,3.1,2.86,6.11,4.3,9.16Z" transform="translate(-146.36 -60.33)"/>
        <path d="M431.67,356.6a5.7,5.7,0,0,1-1.84-.83c-4-4.1-8.13-8.1-11.81-12.47a16.57,16.57,0,0,1-3.57-11.23l0.76-.44L432.28,356Z" transform="translate(-146.36 -60.33)"/>
        <path d="M180.85,356l17.28-24.59C199.84,338.17,188.09,355,180.85,356Z" transform="translate(-146.36 -60.33)"/>
        <path d="M231,268.37c0.61-2.46,1.17-4.93,1.85-7.37,2.22-8,4.44-16,6.77-23.95a24.88,24.88,0,0,1,2.16-4.79,1.91,1.91,0,0,1,1.56-.76,1.69,1.69,0,0,1,1.11,1.19,15.75,15.75,0,0,1,0,4.59c-2.11,10.05-4.94,19.88-9.93,28.94A15.33,15.33,0,0,1,232,269Z" transform="translate(-146.36 -60.33)"/>
        <path d="M381.1,268.92a18.7,18.7,0,0,1-2.68-3c-4.29-7.53-6.6-15.79-8.72-24.11a40.93,40.93,0,0,1-1.38-6.45c-0.1-1.19.65-2.46,1-3.69,1,0.76,2.56,1.32,2.89,2.3,1.91,5.67,3.56,11.42,5.24,17.17,1.39,4.77,2.73,9.56,4,14.36a19.77,19.77,0,0,1,.35,2.93Z" transform="translate(-146.36 -60.33)"/>
        </svg>
        <svg id="5" onClick={props.onBodyClick} style={{fill: fillTypeHands(props.currentIndex)}} className="hands">
        <path d="M454.39,410.92l2.62,5.34a10.94,10.94,0,0,1,.94,2c0.44,1.75,1.25,3.73-.75,5-1.62,1-4.24-.26-5.31-2.32-2-3.76-3.85-7.55-5.81-11.31a6.34,6.34,0,0,0-2.31-2.66c1.88,4,3.74,8.07,5.64,12.09,0.74,1.57,2.17,3.49,0,4.56a4.08,4.08,0,0,1-5.32-1.86c-3.05-6-5.84-12.07-8.6-18.18-0.39-.87-0.05-2.08-0.05-3.2a10.41,10.41,0,0,1-6.2-9.48c-0.12-3.35.78-6.74,1.34-10.09a1.67,1.67,0,0,1,2.73-1.25c2.38,1.55,4.53.7,6.88,0,1.24-.37,3.33-0.59,3.92.09,1.52,1.75,3.31,3.82,2.17,6.28a13.62,13.62,0,0,1,2.72,2.65q5.6,9.83,10.94,19.81a11,11,0,0,1,1.08,4.21c0.06,0.72-.55,2.05-1,2.14a3.47,3.47,0,0,1-2.59-.85,21.19,21.19,0,0,1-2.45-3.27Z" transform="translate(-146.36 -60.33)"/>
        <path d="M178.09,400.24c-0.36,1.83-.39,3.38-1,4.68-2.4,5.27-4.85,10.52-7.57,15.63-0.72,1.36-2.38,2.34-3.81,3.15a2.51,2.51,0,0,1-2.41-.46,3.92,3.92,0,0,1-.13-3c1.75-4,3.71-8,5.59-12a3.85,3.85,0,0,0,.48-2.66l-4.63,8.9c-1.19,2.29-2.31,4.62-3.59,6.86-1.17,2-3.14,2.9-5.21,1.88s-1.39-3-.7-4.68c1-2.29,2.14-4.49,3.2-6.74a3.76,3.76,0,0,0,.44-2.35,29.87,29.87,0,0,1-2.86,4c-0.7.72-1.91,0.94-2.9,1.38-0.32-1.09-1.2-2.39-.87-3.23a94,94,0,0,1,4.36-9.43c2.2-4.25,4.54-8.43,6.84-12.63,1.71-3.13,3.48-6.23,5.16-9.38,0.85-1.58,1.93-1.7,3.45-1,2.56,1.19,5.13,2.11,7.93.33a2.72,2.72,0,0,1,2.48.85c2.66,4.2,2,13.33-1.15,17.17A22.57,22.57,0,0,1,178.09,400.24Z" transform="translate(-146.36 -60.33)"/>
        <path d="M455.66,375.8c-2.07,0-3.26.07-4.44,0a16.58,16.58,0,0,0-10.81,2.52c-2.91,1.94-6.21,1.28-7.33-1.61-2.73-7.06-5-14.31-7.48-21.68a3,3,0,0,1,1.13.14c3.8,3.44,8.62,4.52,13.26,6.29C446.57,364,451,369.56,455.66,375.8Z" transform="translate(-146.36 -60.33)"/>
        <path d="M418.11,346.3a57.46,57.46,0,0,1,3.67,5.47c4.2,8.05,7.43,16.45,7.47,25.69a28.94,28.94,0,0,1-1.11,7.35c-1.5,5.71.09,10.55,3.71,14.94a19.74,19.74,0,0,1,1.28,1.8,2,2,0,0,1,0,.74l-1.77.58c4.61,4,6.76,9.37,8.9,14.81-2.6,1.2-4.11.28-5.16-1.44-2.49-4.1-4.91-8.23-7.23-12.43-0.37-.66-0.05-1.71-0.05-2.62-2.5-2.74-5.44-5.63-8-8.84-3.81-4.77-3.88-10.3-2.17-15.84,1.61-5.2,1.42-10.39.85-15.67-0.51-4.66-.95-9.32-1.42-14Z" transform="translate(-146.36 -60.33)"/>
        <path d="M183.24,402.11h-3.17a13.38,13.38,0,0,1,1.47-2.71c4.19-4.4,4.85-9.64,3.36-15.18-2.54-9.41.3-18,3.67-26.53A81,81,0,0,1,194,347.51c0.35-.62,1.24-0.93,2.32-1.68-0.68,6-1.54,11.24-1.79,16.53-0.2,4.19-.35,8.61.73,12.58,2.95,10.83,0,19.22-9.76,25.2a16.11,16.11,0,0,0-1.87,1.57Z" transform="translate(-146.36 -60.33)"/>
        <path d="M188.09,353.67c-2.62,7.82-4.79,14.95-7.43,21.9-1.55,4.08-4.6,4.83-8.25,2.56-3.08-1.9-6.23-3.09-10-2.37a32,32,0,0,1-5.11,0c2-2.4,3.42-4.35,5.09-6.06a36.3,36.3,0,0,1,6.21-5.56c2.57-1.63,5.61-2.5,8.36-3.89s5.61-3.11,8.39-4.71C186.15,355.14,186.84,354.56,188.09,353.67Z" transform="translate(-146.36 -60.33)"/>
        <path d="M183.24,402.11l0.42-.4,3.07,0.17c-3.43,5.49-6.41,10.48-9.66,15.29-0.57.84-2.25,0.93-4.16,1.64a26.37,26.37,0,0,1,1-4,39.45,39.45,0,0,1,3.65-7.07C179.12,405.63,181.32,404,183.24,402.11Z" transform="translate(-146.36 -60.33)"/>
        <path d="M445.22,377.51c7.82-2,14.33,1.44,20.8,4.79,0.41,0.21.48,2.07,0.05,2.73a5.71,5.71,0,0,1-6.42,2.43c-2.95-.63-5.87-1.4-8.78-2.19C448.86,384.72,446,380.72,445.22,377.51Z" transform="translate(-146.36 -60.33)"/>
        <path d="M167.85,377.3c-0.15,3.12-3.24,7.28-5.92,8-2.92.77-5.85,1.51-8.8,2.15-2.56.56-5.53-.73-6.42-2.66-0.62-1.35-.54-2.43,1.15-3a16.61,16.61,0,0,0,3.8-1.63C156.62,377,162,376.66,167.85,377.3Z" transform="translate(-146.36 -60.33)"/>

        </svg>
        <svg id="4" onClick={props.onBodyClick} style={{fill: fillTypeHead(props.currentIndex)}} className="head">

        <path d="M306.58,67.63c-1.88,10.89-9,17.53-17.77,23.72,0-3.34.32-6.35-.09-9.26s-1.66-5.86-2.31-8.83a5.67,5.67,0,0,1,.26-3.76c3.27-5.43,8.63-7.79,14.56-8.68,8.67-1.31,16.87-.25,23.5,6.31,2.16,2.14,3.18,4.13,1.62,7.51A24,24,0,0,0,324.25,89a15,15,0,0,1,0,2.26C315.63,85.19,308.42,78.57,306.58,67.63Z" transform="translate(-146.36 -60.33)"/>
        <path d="M306.57,74.65c2.37,3.35,4.71,6.66,7,10,0.89,1.26.94,2.48-.5,3.34-4.4,2.64-5.07,6.39-4.1,11.17a25.31,25.31,0,0,0,4,9.65c2.49,3.71,3.39,8.68,4.19,13.25,0.45,2.57-2.18,4.39-5,4.39-4.09,0-8.18,0-12.27-.13a4.27,4.27,0,0,1-4.18-5.21c1.33-5.32,1.63-11.15,6.52-15a3.83,3.83,0,0,0,1-2.17c0.35-1.73.4-3.52,0.8-5.23,1-4.38.37-8-3.91-10.41a3.13,3.13,0,0,1-.92-2.92C301.57,81.71,304.12,78.21,306.57,74.65Zm4.52,39.17c-1.94.45-3.62,1.18-5.27,1.11s-3.07-1-5-1.65C305.3,118.37,307.33,118.46,311.1,113.82Z" transform="translate(-146.36 -60.33)"/>
        <path d="M330,73.8c10.28,12.93,4.65,39.31-10.08,48.49-0.53-2-.93-4-1.55-5.84a46.31,46.31,0,0,0-2.51-6.43c-1.28-2.51-1.13-3.18,1.73-3.63,3.1-.49,6.23-0.77,9.35-1.17,3.77-.49,4.35-1.31,2.64-4.58-4.06-7.76-3.67-15.68-1.18-23.72A21.54,21.54,0,0,1,330,73.8Z" transform="translate(-146.36 -60.33)"/>
        <path d="M298.2,107l-5.27,14.87c-14.47-8.23-20.26-35.48-9.78-48.12a23.25,23.25,0,0,1,1.72,3.36c2.51,8,2.82,15.82-1.22,23.51-1.73,3.29-1.15,4,2.63,4.58C290.27,105.78,294.27,106.4,298.2,107Z" transform="translate(-146.36 -60.33)"/>
        <path d="M306.54,169.08l-7-24.54h13.9Z" transform="translate(-146.36 -60.33)"/>
        </svg>
        
        <svg id="0" onClick={props.onBodyClick} style={{fill: fillTypeEyes(props.currentIndex)}} className="visionAudio">
        <path d="M327.38,99.19c1.7,3.25,1.23,4.24-1.87,4.82-2.74.52-5.44,1.26-8.19,1.67-3.48.52-4.42-.23-5.27-3.67-0.54-2.16-.91-4.38-1.65-6.48-1.18-3.37,1.3-4.69,3.28-6.27a4.25,4.25,0,0,1,5.66,0,40.5,40.5,0,0,1,6.23,6.24c-5.16-1.13-9.41-.36-13,4.37,1.7,1,3.14,2.31,4.77,2.65a10.08,10.08,0,0,0,5.07-.62A33.28,33.28,0,0,0,327.38,99.19Z" transform="translate(-146.36 -60.33)"/>
        <path d="M285.76,99c4.76,3,9.46,6.62,14.57.58-3.11-4.17-7.17-5.23-12.11-3.94l-0.4-1c2.51-2,4.77-4.58,7.59-6,3.32-1.69,8.23,3,7.4,6.71-0.57,2.53-1.3,5-1.85,7.57-0.45,2.11-1.73,3.11-3.76,2.82-3.66-.52-7.32-1.14-10.94-1.92C284.56,103.42,284.42,102,285.76,99Z" transform="translate(-146.36 -60.33)"/>
        <path d="M312.82,140.43c0.65-2,1.17-4.06,2-6,3.35-8,10.17-13.35,15.53-19.82A9.2,9.2,0,0,1,332,113.4c-0.57,6.06-1.06,11.77-1.67,17.48a4,4,0,0,1-1,2.49,38.73,38.73,0,0,1-15.39,7.79Z" transform="translate(-146.36 -60.33)"/>
        <path d="M316,129c-1,1.73-1.66,2.71-2.15,3.75a62.07,62.07,0,0,0-3.31,7.48c-0.49,1.53-1.08,2.09-2.64,2.15-4.8.18-4.62,0.18-5.76-4.4-0.46-1.86-1.9-3.47-2.88-5.2-0.63-1.12-1.22-2.26-2-3.78H316Z" transform="translate(-146.36 -60.33)"/>
        <path d="M281.76,113.42a43.17,43.17,0,0,0,3.54,4.07,63,63,0,0,1,13.84,17.92,5.17,5.17,0,0,1,.86,1.73,7,7,0,0,1-.35,3.39c-0.2.39-2,.42-2.73,0-4.23-2.08-8.43-4.22-12.48-6.62-0.91-.54-1.5-2.16-1.64-3.35-0.65-5.6-1.08-11.23-1.59-16.84Z" transform="translate(-146.36 -60.33)"/>
        <path d="M280,115.44c-0.38.52-.75,1.54-1.26,1.61a2.36,2.36,0,0,1-2-1c-1.69-3.38-3.22-6.84-4.79-10.28-1.33-2.9-1-4.39,1.57-5.72,0.59-.31,2.36.21,2.49,0.67C277.46,105.47,278.65,110.31,280,115.44Z" transform="translate(-146.36 -60.33)"/>
        <path d="M334.48,118.08c-0.63-1.3-1.38-2.08-1.24-2.65q1.81-7.35,4-14.6a2.24,2.24,0,0,1,2-1,4,4,0,0,1,2.25,5.58c-1.52,3.36-3,6.74-4.61,10.06A14.65,14.65,0,0,1,334.48,118.08Z" transform="translate(-146.36 -60.33)"/>
        <path d="M320.31,95.95l4.09,2.11c-1.06,1.14-2,3-3.23,3.27-1.68.41-3.67-.27-5.49-0.66a2.19,2.19,0,0,1-.45-1.58C316.83,98,318.52,97,320.31,95.95Z" transform="translate(-146.36 -60.33)"/>
        <path d="M294,102.48a49.62,49.62,0,0,1-4.57-3,2.63,2.63,0,0,1,0-1.95c1.65-.36,3.35-0.53,5-0.73a0.72,0.72,0,0,1,.52.15c1.06,1,2.1,2.05,3.14,3.08Z" transform="translate(-146.36 -60.33)"/>
        <path className="cls-1" d="M311.1,113.82c-3.77,4.63-5.8,4.55-10.25-.54,1.91,0.67,3.43,1.59,5,1.65S309.15,114.27,311.1,113.82Z" transform="translate(-146.36 -60.33)"/></svg>
        </svg>
    </React.Fragment>
  );  
}

BodyTypeSVG.propTypes = {
  currentIndex: PropTypes.number,
  onBodyClick: PropTypes.func
}

export default BodyTypeSVG;
