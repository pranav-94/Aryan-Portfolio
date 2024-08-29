// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: Importing global styles
import AnimatedCursor from "react-animated-cursor"
import { RecoilRoot } from 'recoil';
// Create the root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
const isAndroid = /Android/i.test(navigator.userAgent);

root.render(
  <React.StrictMode>
    <div style={{fontFamily: 'monospace'}}>
    <RecoilRoot>
    <App/>
    {
           !isAndroid && (
            <AnimatedCursor
            innerSize={10}
            outerSize={40}
            // innerScale={2}
            outerScale={2}
            outerAlpha={0}
            // hasBlendMode={true}
            innerStyle={{
              backgroundColor: '#90b8f8'
            }}
            outerStyle={{
              backgroundColor: 'transparent',
              border: '4px solid #90b8f8'
            }}
          />
           )
    }

</RecoilRoot>
</div>
  </React.StrictMode>
);
