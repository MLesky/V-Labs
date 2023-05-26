import { Hidden } from '@mui/material';
import { RefObject, FC } from 'react';

export default function IFrameRenderer({ landingPageHtml, handleLoad, isIFrameLoaded }){
  return (
    <iframe
        id='exp-frame'
        src={landingPageHtml}
        allowfullscreen
        style={{
            width: isIFrameLoaded ? '100%' : 0,
            height: '100%',
            display: !isIFrameLoaded ? "block" : "hidden"
        }}
        onLoad={handleLoad}
    ></iframe>
  );
};