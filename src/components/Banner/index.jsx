import React from 'react'
import { TypeAnimation } from 'react-type-animation'


export default function Banner() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 items-end px-4 py-20 sm:px-0">
            <div>
                <h1 className="text-base text-gray-400 font-light mb-4" style={{letterSpacing: '4px'}}>WELCOME TO MY WORLD</h1>
                <h1 className="text-5xl font-bold text-white">
                    Hi, I’m <span className='text-orange-300'>Ansary</span>
                    <br />
                    <div className='font-bold text-5xl mt-2'>
                        <span className='text-orange-300'>a </span> 
                        <TypeAnimation
                            sequence={[
                                'Developer.', // Types 'One'
                                2000, // Waits 1s
                                'Professional Coder.', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'UI/UX Designer.', // Types 'Three' without deleting 'Two'
                                2000, // Waits 1s
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </div>
                </h1>
                <p className='text-black-400 mt-8 text-lg text-gray-400'>
                    I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that
                </p>

                <a href='#downloadCv' className='inline-block mt-14 text-white text-lg font-semibold mt-14 px-8 py-3 border border-orange-300 hover:bg-orange-500'>DOWNLOAD CV</a>
            </div>
            <div>
                <img className='block, ml-auto' src="./image-two.png" alt="" />
                <div className='grid'>
                    <div className='flex justify-end gap-1'>
                        <a href="#facebook" className='transform scale-75'>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="64px" height="64px"><radialGradient id="nT5WH7nXAOiS46rXmee3Oa" cx="33.34" cy="27.936" r="43.888" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f4e9c3"/><stop offset=".219" stop-color="#f8eecd"/><stop offset=".644" stop-color="#fdf4dc"/><stop offset="1" stop-color="#fff6e1"/></radialGradient><path fill="url(#nT5WH7nXAOiS46rXmee3Oa)" d="M51.03,37.34c0.16,0.98,1.08,1.66,2.08,1.66h5.39c2.63,0,4.75,2.28,4.48,4.96	C62.74,46.3,60.64,48,58.29,48H49c-1.22,0-2.18,1.08-1.97,2.34c0.16,0.98,1.08,1.66,2.08,1.66h8.39c1.24,0,2.37,0.5,3.18,1.32	C61.5,54.13,62,55.26,62,56.5c0,2.49-2.01,4.5-4.5,4.5h-49c-1.52,0-2.9-0.62-3.89-1.61C3.62,58.4,3,57.02,3,55.5	C3,52.46,5.46,50,8.5,50H14c1.22,0,2.18-1.08,1.97-2.34C15.81,46.68,14.89,44,13.89,44H5.5c-2.63,0-4.75-2.28-4.48-4.96	C1.26,36.7,3.36,35,5.71,35H8c1.71,0,3.09-1.43,3-3.16C10.91,30.22,9.45,29,7.83,29H4.5c-2.63,0-4.75-2.28-4.48-4.96	C0.26,21.7,2.37,20,4.71,20H20c0.83,0,1.58-0.34,2.12-0.88C22.66,18.58,23,17.83,23,17c0-1.66-1.34-3-3-3h-1.18	c-0.62-0.09-1.43,0-2.32,0h-9c-1.52,0-2.9-0.62-3.89-1.61S2,10.02,2,8.5C2,5.46,4.46,3,7.5,3h49c3.21,0,5.8,2.79,5.47,6.06	C61.68,11.92,60.11,14,57.24,14H52c-2.76,0-5,2.24-5,5c0,1.38,0.56,2.63,1.46,3.54C49.37,23.44,50.62,24,52,24h6.5	c3.21,0,5.8,2.79,5.47,6.06C63.68,32.92,61.11,35,58.24,35H53C51.78,35,50.82,36.08,51.03,37.34z"/><linearGradient id="nT5WH7nXAOiS46rXmee3Ob" x1="32" x2="32" y1="-3.34" y2="59.223" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#155cde"/><stop offset=".278" stop-color="#1f7fe5"/><stop offset=".569" stop-color="#279ceb"/><stop offset=".82" stop-color="#2cafef"/><stop offset="1" stop-color="#2eb5f0"/></linearGradient><path fill="url(#nT5WH7nXAOiS46rXmee3Ob)" d="M58,32c0,13.35-10.05,24.34-23,25.83C34.02,57.94,33.01,58,32,58c-1.71,0-3.38-0.17-5-0.49	C15.03,55.19,6,44.65,6,32C6,17.64,17.64,6,32,6S58,17.64,58,32z"/><path fill="#fff" d="M42.8,36.05l-0.76,2C41.6,39.22,40.46,40,39.19,40H35v17.83C34.02,57.94,33.01,58,32,58	c-1.71,0-3.38-0.17-5-0.49V40h-2.95C22.36,40,21,38.66,21,37v-2c0-1.66,1.36-3,3.05-3H27v-6c0-5.51,4.49-10,10-10h3	c2.21,0,4,1.79,4,4s-1.79,4-4,4h-3c-1.1,0-2,0.9-2,2v6h4.95C42.08,32,43.55,34.09,42.8,36.05z"/></svg>
                        </a>
                        <a href="#insta" className='transform scale-75'>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><radialGradient id="TGwjmZMm2W~B4yrgup6jda" cx="32" cy="32.5" r="31.259" gradientTransform="matrix(1 0 0 -1 0 64)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#efdcb1"/><stop offset="0" stop-color="#f2e0bb"/><stop offset=".011" stop-color="#f2e0bc"/><stop offset=".362" stop-color="#f9edd2"/><stop offset=".699" stop-color="#fef4df"/><stop offset="1" stop-color="#fff7e4"/></radialGradient><path fill="url(#TGwjmZMm2W~B4yrgup6jda)" d="M58,54c-1.1,0-2-0.9-2-2s0.9-2,2-2h2.5c1.9,0,3.5-1.6,3.5-3.5S62.4,43,60.5,43H50c-1.4,0-2.5-1.1-2.5-2.5	S48.6,38,50,38h8c1.7,0,3-1.3,3-3s-1.3-3-3-3H42v-6h18c2.3,0,4.2-2,4-4.4c-0.2-2.1-2.1-3.6-4.2-3.6H58c-1.1,0-2-0.9-2-2s0.9-2,2-2	h0.4c1.3,0,2.5-0.9,2.6-2.2c0.2-1.5-1-2.8-2.5-2.8h-14C43.7,9,43,8.3,43,7.5S43.7,6,44.5,6h3.9c1.3,0,2.5-0.9,2.6-2.2	C51.1,2.3,50,1,48.5,1H15.6c-1.3,0-2.5,0.9-2.6,2.2C12.9,4.7,14,6,15.5,6H19c1.1,0,2,0.9,2,2s-0.9,2-2,2H6.2c-2.1,0-4,1.5-4.2,3.6	C1.8,16,3.7,18,6,18h2.5c1.9,0,3.5,1.6,3.5,3.5S10.4,25,8.5,25H5.2c-2.1,0-4,1.5-4.2,3.6C0.8,31,2.7,33,5,33h17v11H6	c-1.7,0-3,1.3-3,3s1.3,3,3,3l0,0c1.1,0,2,0.9,2,2s-0.9,2-2,2H4.2c-2.1,0-4,1.5-4.2,3.6C-0.2,60,1.7,62,4,62h53.8	c2.1,0,4-1.5,4.2-3.6C62.2,56,60.3,54,58,54z"/><radialGradient id="TGwjmZMm2W~B4yrgup6jdb" cx="18.51" cy="66.293" r="69.648" gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)" gradientUnits="userSpaceOnUse"><stop offset=".073" stop-color="#eacc7b"/><stop offset=".184" stop-color="#ecaa59"/><stop offset=".307" stop-color="#ef802e"/><stop offset=".358" stop-color="#ef6d3a"/><stop offset=".46" stop-color="#f04b50"/><stop offset=".516" stop-color="#f03e58"/><stop offset=".689" stop-color="#db359e"/><stop offset=".724" stop-color="#ce37a4"/><stop offset=".789" stop-color="#ac3cb4"/><stop offset=".877" stop-color="#7544cf"/><stop offset=".98" stop-color="#2b4ff2"/></radialGradient><path fill="url(#TGwjmZMm2W~B4yrgup6jdb)" d="M45,57H19c-5.5,0-10-4.5-10-10V21c0-5.5,4.5-10,10-10h26c5.5,0,10,4.5,10,10v26C55,52.5,50.5,57,45,57z"/><path fill="#fff" d="M32,20c4.6,0,5.1,0,6.9,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.2C46,28.9,46,29.4,46,34s0,5.1-0.1,6.9c-0.1,1.7-0.4,2.6-0.6,3.2c-0.3,0.8-0.7,1.4-1.3,2 c-0.6,0.6-1.2,1-2,1.3c-0.6,0.2-1.5,0.5-3.2,0.6C37.1,48,36.6,48,32,48s-5.1,0-6.9-0.1c-1.7-0.1-2.6-0.4-3.2-0.6 c-0.8-0.3-1.4-0.7-2-1.3c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2C18,39.1,18,38.6,18,34s0-5.1,0.1-6.9 c0.1-1.7,0.4-2.6,0.6-3.2c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C26.9,20,27.4,20,32,20 M32,17 c-4.6,0-5.2,0-7,0.1c-1.8,0.1-3,0.4-4.1,0.8c-1.1,0.4-2.1,1-3,2s-1.5,1.9-2,3c-0.4,1.1-0.7,2.3-0.8,4.1C15,28.8,15,29.4,15,34 s0,5.2,0.1,7c0.1,1.8,0.4,3,0.8,4.1c0.4,1.1,1,2.1,2,3c0.9,0.9,1.9,1.5,3,2c1.1,0.4,2.3,0.7,4.1,0.8c1.8,0.1,2.4,0.1,7,0.1 s5.2,0,7-0.1c1.8-0.1,3-0.4,4.1-0.8c1.1-0.4,2.1-1,3-2c0.9-0.9,1.5-1.9,2-3c0.4-1.1,0.7-2.3,0.8-4.1c0.1-1.8,0.1-2.4,0.1-7 s0-5.2-0.1-7c-0.1-1.8-0.4-3-0.8-4.1c-0.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-0.4-2.3-0.7-4.1-0.8C37.2,17,36.6,17,32,17L32,17z"/><path fill="#fff" d="M32,25c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S37,25,32,25z M32,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S35.3,40,32,40 z"/><circle cx="41" cy="25" r="2" fill="#fff"/></svg>
                        </a>
                        <a href="#twitter" className='transform scale-75'>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><radialGradient id="xW1rhakWxHfCsuNDi~7SWa" cx="32" cy="33" r="29.606" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#c5f1ff"/><stop offset=".35" stop-color="#cdf3ff"/><stop offset=".907" stop-color="#e4faff"/><stop offset="1" stop-color="#e9fbff"/></radialGradient><path fill="url(#xW1rhakWxHfCsuNDi~7SWa)" d="M10.5,60h41c2.485,0,4.5-2.015,4.5-4.5v0c0-2.485-2.015-4.5-4.5-4.5h-0.393 c-0.996,0-1.92-0.681-2.08-1.664C48.824,48.083,49.785,47,51,47l5.288,0c2.347,0,4.453-1.704,4.689-4.039 C61.247,40.282,59.127,38,56.5,38l-3.393,0c-0.996,0-1.92-0.681-2.08-1.664C50.824,35.083,51.785,34,53,34l5.241,0 c2.868,0,5.442-2.082,5.731-4.936C64.303,25.789,61.711,23,58.5,23l-12.33,0c-1.624,0-3.081-1.216-3.166-2.839 C42.914,18.431,44.29,17,46,17l2.241,0c2.868,0,5.442-2.082,5.731-4.936C54.303,8.789,51.711,6,48.5,6l-38,0C7.462,6,5,8.462,5,11.5 v0c0,3.038,2.462,5.5,5.5,5.5H14c1.105,0,2,0.895,2,2v0c0,1.105-0.895,2-2,2l-9.288,0c-2.347,0-4.453,1.704-4.689,4.038 C-0.248,27.718,1.873,30,4.5,30l8.33,0c1.624,0,3.081,1.216,3.166,2.839C16.086,34.569,14.71,36,13,36H7.712 c-2.347,0-4.453,1.704-4.689,4.038C2.753,42.718,4.873,45,7.5,45h6.393c0.996,0,1.92,0.681,2.08,1.664 C16.176,47.917,15.215,49,14,49l-3.5,0C7.462,49,5,51.462,5,54.5v0C5,57.538,7.462,60,10.5,60z"/><linearGradient id="xW1rhakWxHfCsuNDi~7SWb" x1="32.5" x2="32.5" y1="64.102" y2="22.102" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#155cde"/><stop offset=".278" stop-color="#1f7fe5"/><stop offset=".569" stop-color="#279ceb"/><stop offset=".82" stop-color="#2cafef"/><stop offset="1" stop-color="#2eb5f0"/></linearGradient><path fill="url(#xW1rhakWxHfCsuNDi~7SWb)" d="M57.667,19.058c-1.44,0.493-2.997,0.771-4.636,0.956c1.617-0.805,2.735-1.99,3.78-3.441 c0.598-0.83-0.329-1.915-1.25-1.469c-1.638,0.793-3.22,1.382-5.213,1.721C48.399,15.073,45.829,14,43,14 c-4.11,0-7.69,2.25-9.57,5.58C32.52,21.18,32,23.03,32,25c0,0.677,0.082,1.332,0.199,1.975c-8.839-0.263-16.248-4.827-20.463-10.568 C11.268,15.77,10.29,15.906,10,16.641C9.553,17.772,9,19,9,21c0,0.12,0,0.23,0.01,0.34c0.04,1.3,0.33,2.54,0.83,3.66 c0.94,2.17,2.64,3.94,4.77,4.98C14.41,29.99,14.21,30,14,30c-2,0-2.658-0.685-3.743-0.967c-0.683-0.178-1.35,0.392-1.247,1.09 c0.328,2.221,1.484,4.559,3.029,6.047c1.66,1.62,3.88,2.66,6.35,2.81C17.07,39.63,15.58,40,14,40h-1c-0.756,0-1.227,0.8-0.886,1.474 c1.677,3.317,5.561,5.53,9.722,5.516C17.826,49.518,13.091,51,8,51H7c-0.552,0-1,0.448-1,1c0,0.458,0.314,0.828,0.734,0.946 l-0.002,0.017c0,0,7.53,3.037,16.268,3.037c16.93,0,30.69-13.57,30.99-30.43C54,25.38,54,25.19,54,25s0-0.38-0.01-0.57 c-0.014-0.275-0.048-0.545-0.082-0.815c1.851-0.589,3.499-1.558,4.811-2.926C59.442,19.936,58.655,18.72,57.667,19.058z"/></svg>
                        </a>
                        <a href="#youtube" className='transform scale-75'>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><radialGradient id="hjoO3Mp1z9i_0IplRR9gUa" cx="32.5" cy="32" r="31.751" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#afeeff"/><stop offset=".193" stop-color="#bbf1ff"/><stop offset=".703" stop-color="#d7f8ff"/><stop offset="1" stop-color="#e1faff"/></radialGradient><path fill="url(#hjoO3Mp1z9i_0IplRR9gUa)" d="M61.501,18.008H56c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2h2.411c1.85,0,3.32-1.69,2.94-3.6 c-0.28-1.43-1.62-2.4-3.07-2.4L45.5,8C44.67,8,44,7.33,44,6.5C44,5.67,44.67,5,45.5,5h5.91c1.14,0,2.2-0.72,2.5-1.82 C54.36,1.52,53.1,0,51.5,0H7.59c-1.14,0-2.2,0.72-2.5,1.82C4.64,3.48,5.9,5,7.5,5h3c0.69,0,1.32,0.28,1.77,0.73 C12.72,6.18,13,6.81,13,7.5c0,1.38-1.12,2.5-2.5,2.5H4c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3h21c0.35,0,0.69-0.07,1-0.19V23H13v9 h4.5c1.38,0,2.5,1.12,2.5,2.5c0,0.69-0.28,1.32-0.73,1.77C18.82,36.72,18.19,37,17.5,37h-8C8.12,37,7,38.12,7,39.5S8.12,42,9.5,42h4 c1.209,0,2.218,0.859,2.45,2H5.5C3.025,44,1,46.025,1,48.5C1,50.975,3.025,53,5.5,53h19c1.38,0,2.5,1.12,2.5,2.5S25.88,58,24.5,58 H19c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3h40c1.66,0,3-1.34,3-3c0-1.66-1.34-3-3-3h-5.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5 h4c2.475,0,4.5-2.025,4.5-4.5c0-2.475-2.025-4.5-4.5-4.5H47.437c0.314-1.587-0.896-3-2.437-3c-0.83,0,1-0.67,1-1.5 c0-0.83,0.67-1.5,1.5-1.5h2.91c1.14,0,2.2-0.72,2.5-1.82C53.36,34.52,52.1,32,50.5,32H50c-1.1,0-2-5.9-2-7c0-1.1,0.9-2,2-2 l11.411,0.008c1.14,0,2.2-0.72,2.5-1.82C64.351,19.527,63.091,18.008,61.501,18.008z"/><linearGradient id="hjoO3Mp1z9i_0IplRR9gUb" x1="32" x2="32" y1="52" y2="13" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#ff634d"/><stop offset=".204" stop-color="#fe6464"/><stop offset=".521" stop-color="#fc6581"/><stop offset=".794" stop-color="#fa6694"/><stop offset=".989" stop-color="#fa669a"/><stop offset="1" stop-color="#fa669a"/></linearGradient><path fill="url(#hjoO3Mp1z9i_0IplRR9gUb)" d="M56.833,45.37c-0.519,2.73-2.723,4.81-5.446,5.2C47.107,51.22,39.975,52,31.935,52 c-7.91,0-15.042-0.78-19.451-1.43c-2.723-0.39-4.928-2.47-5.446-5.2C6.519,42.38,6,37.96,6,32.5s0.519-9.88,1.037-12.87 c0.519-2.73,2.723-4.81,5.446-5.2C16.763,13.78,23.895,13,31.935,13s15.042,0.78,19.451,1.43c2.723,0.39,4.928,2.47,5.446,5.2 C57.352,22.62,58,27.04,58,32.5C57.87,37.96,57.352,42.38,56.833,45.37z"/><path fill="#fff" d="M26 42L26 23 42 32.5z"/><linearGradient id="hjoO3Mp1z9i_0IplRR9gUc" x1="16.003" x2="16.003" y1="47.816" y2="14.269" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#ff735d"/><stop offset=".139" stop-color="#fe746b"/><stop offset=".492" stop-color="#fc758a"/><stop offset=".791" stop-color="#fa769d"/><stop offset="1" stop-color="#fa76a4"/></linearGradient><path fill="url(#hjoO3Mp1z9i_0IplRR9gUc)" d="M7.037,19.63C6.535,22.526,6.037,26.774,6.006,32H16c1.657,0,3-1.343,3-3s-1.343-3-3-3h-0.5 c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5H22c2.2,0,4-1.8,4-4c0-1.695-1.072-3.142-2.568-3.722 c-4.452,0.285-8.262,0.744-10.948,1.152C9.761,14.82,7.556,16.9,7.037,19.63z"/><linearGradient id="hjoO3Mp1z9i_0IplRR9gUd" x1="48.193" x2="50.159" y1="54.306" y2="23.31" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#ff5840"/><stop offset=".007" stop-color="#ff5840"/><stop offset=".989" stop-color="#fa528c"/><stop offset="1" stop-color="#fa528c"/></linearGradient><path fill="url(#hjoO3Mp1z9i_0IplRR9gUd)" d="M45.5,37c-1.381,0-2.5,1.119-2.5,2.5c0,1.381,1.119,2.5,2.5,2.5h1c1.381,0,2.5,1.119,2.5,2.5 c0,1.381-1.119,2.5-2.5,2.5h-4c-1.381,0-2.5,1.119-2.5,2.5c0,0.932,0.516,1.735,1.272,2.165c4.092-0.287,7.599-0.713,10.115-1.095 c2.723-0.39,4.928-2.47,5.446-5.2c0.367-2.116,0.731-4.96,0.961-8.37H45.5z"/></svg>
                        </a>
                        <a href="#linkedin" className='transform scale-75'>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><radialGradient id="jAVUMfCM1liBjYZwQpghOa" cx="32" cy="31.5" r="31.259" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#c5f1ff"/><stop offset=".35" stop-color="#cdf3ff"/><stop offset=".907" stop-color="#e4faff"/><stop offset="1" stop-color="#e9fbff"/></radialGradient><path fill="url(#jAVUMfCM1liBjYZwQpghOa)" d="M58,54c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h2.5c1.925,0,3.5-1.575,3.5-3.5 S62.425,43,60.5,43H50c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5h8c1.65,0,3-1.35,3-3c0-1.65-1.35-3-3-3H42v-6h18 c2.335,0,4.22-2.028,3.979-4.41C63.77,19.514,61.897,18,59.811,18H58c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h0.357 c1.308,0,2.499-0.941,2.63-2.242C61.137,10.261,59.966,9,58.5,9h-14C43.672,9,43,8.328,43,7.5S43.672,6,44.5,6h3.857 c1.308,0,2.499-0.941,2.63-2.242C51.137,2.261,49.966,1,48.5,1L15.643,1c-1.308,0-2.499,0.941-2.63,2.242 C12.863,4.739,14.034,6,15.5,6H19c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2H6.189c-2.086,0-3.958,1.514-4.168,3.59 C1.78,15.972,3.665,18,6,18h2.5c1.933,0,3.5,1.567,3.5,3.5c0,1.933-1.567,3.5-3.5,3.5H5.189c-2.086,0-3.958,1.514-4.168,3.59 C0.78,30.972,2.665,33,5,33h17v11H6c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3h0c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2H4.189 c-2.086,0-3.958,1.514-4.168,3.59C-0.22,59.972,1.665,62,4,62h53.811c2.086,0,3.958-1.514,4.168-3.59C62.22,56.028,60.335,54,58,54z"/><linearGradient id="jAVUMfCM1liBjYZwQpghOb" x1="32" x2="32" y1="59.381" y2="15.381" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#155cde"/><stop offset=".278" stop-color="#1f7fe5"/><stop offset=".569" stop-color="#279ceb"/><stop offset=".82" stop-color="#2cafef"/><stop offset="1" stop-color="#2eb5f0"/></linearGradient><path fill="url(#jAVUMfCM1liBjYZwQpghOb)" d="M50,12H14c-2.209,0-4,1.791-4,4v36c0,2.209,1.791,4,4,4h36c2.209,0,4-1.791,4-4V16 C54,13.791,52.209,12,50,12z"/><path fill="#fff" d="M19 28h2c1.105 0 2 .895 2 2v17c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2V30C17 28.895 17.895 28 19 28zM19.981 25h-.033C18.158 25 17 23.664 17 22c0-1.706 1.195-3 3.019-3 1.823 0 2.948 1.294 2.981 3C23 23.664 21.842 25 19.981 25zM45 49h-2c-1.105 0-2-.895-2-2v-9.372c0-2.749-1.506-4.624-4.239-4.624-1.953 0-3.133 1.265-3.626 2.485C32.954 35.929 33 37.14 33 37.75V47c0 1.105-.888 2-1.993 2H29c-1.105 0-2-.895-2-2V30c0-1.105.895-2 2-2h2.007c1.105 0 2 .895 2 2v1.021C33.911 29.625 35.564 28 39.173 28 43.646 28 47 30.563 47 36.842V47C47 48.105 46.105 49 45 49z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
