import React from "react";
import styled from "styled-components";

function preloader() {
  return (
    <BackDiv>
      <SvgCenter
        id="logo"
        width="470"
        height="114"
        viewBox="0 0 770 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path
          d="M5.27795 56.744C5.27795 46.952 7.48595 38.168 11.902 30.392C16.318 22.52 22.318 16.376 29.902 11.96C37.582 7.544 46.078 5.336 55.39 5.336C66.334 5.336 75.886 7.976 84.046 13.256C92.206 18.536 98.158 26.024 101.902 35.72H86.206C83.422 29.672 79.39 25.016 74.11 21.752C68.926 18.488 62.686 16.856 55.39 16.856C48.382 16.856 42.094 18.488 36.526 21.752C30.958 25.016 26.59 29.672 23.422 35.72C20.254 41.672 18.67 48.68 18.67 56.744C18.67 64.712 20.254 71.72 23.422 77.768C26.59 83.72 30.958 88.328 36.526 91.592C42.094 94.856 48.382 96.488 55.39 96.488C62.686 96.488 68.926 94.904 74.11 91.736C79.39 88.472 83.422 83.816 86.206 77.768H101.902C98.158 87.368 92.206 94.808 84.046 100.088C75.886 105.272 66.334 107.864 55.39 107.864C46.078 107.864 37.582 105.704 29.902 101.384C22.318 96.968 16.318 90.872 11.902 83.096C7.48595 75.32 5.27795 66.536 5.27795 56.744Z"
          stroke="#4AEEF9"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M134.224 6.632V70.136C134.224 79.064 136.384 85.688 140.704 90.008C145.12 94.328 151.216 96.488 158.992 96.488C166.672 96.488 172.672 94.328 176.992 90.008C181.408 85.688 183.616 79.064 183.616 70.136V6.632H196.72V69.992C196.72 78.344 195.04 85.4 191.68 91.16C188.32 96.824 183.76 101.048 178 103.832C172.336 106.616 165.952 108.008 158.848 108.008C151.744 108.008 145.312 106.616 139.552 103.832C133.888 101.048 129.376 96.824 126.016 91.16C122.752 85.4 121.12 78.344 121.12 69.992V6.632H134.224Z"
          stroke="#4AEEF9"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M271.428 107L247.524 65.96H231.684V107H218.58V6.632H250.98C258.564 6.632 264.948 7.928 270.132 10.52C275.412 13.112 279.348 16.616 281.94 21.032C284.532 25.448 285.828 30.488 285.828 36.152C285.828 43.064 283.812 49.16 279.78 54.44C275.844 59.72 269.892 63.224 261.924 64.952L287.124 107H271.428ZM231.684 55.448H250.98C258.084 55.448 263.412 53.72 266.964 50.264C270.516 46.712 272.292 42.008 272.292 36.152C272.292 30.2 270.516 25.592 266.964 22.328C263.508 19.064 258.18 17.432 250.98 17.432H231.684V55.448Z"
          stroke="#4AEEF9"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M367.966 6.632V17.288H340.606V107H327.502V17.288H299.998V6.632H367.966Z"
          stroke="#4AEEF9"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M397.2 6.632V107H384.096V6.632H397.2Z"
          stroke="#4AEEF9"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M451.357 108.008C444.733 108.008 438.781 106.856 433.501 104.552C428.317 102.152 424.237 98.888 421.261 94.76C418.285 90.536 416.749 85.688 416.653 80.216H430.621C431.101 84.92 433.021 88.904 436.381 92.168C439.837 95.336 444.829 96.92 451.357 96.92C457.597 96.92 462.493 95.384 466.045 92.312C469.693 89.144 471.517 85.112 471.517 80.216C471.517 76.376 470.461 73.256 468.349 70.856C466.237 68.456 463.597 66.632 460.429 65.384C457.261 64.136 452.989 62.792 447.613 61.352C440.989 59.624 435.661 57.896 431.629 56.168C427.693 54.44 424.285 51.752 421.405 48.104C418.621 44.36 417.229 39.368 417.229 33.128C417.229 27.656 418.621 22.808 421.405 18.584C424.189 14.36 428.077 11.096 433.069 8.792C438.157 6.488 443.965 5.336 450.493 5.336C459.901 5.336 467.581 7.688 473.533 12.392C479.581 17.096 482.989 23.336 483.757 31.112H469.357C468.877 27.272 466.861 23.912 463.309 21.032C459.757 18.056 455.053 16.568 449.197 16.568C443.725 16.568 439.261 18.008 435.805 20.888C432.349 23.672 430.621 27.608 430.621 32.696C430.621 36.344 431.629 39.32 433.645 41.624C435.757 43.928 438.301 45.704 441.277 46.952C444.349 48.104 448.621 49.448 454.093 50.984C460.717 52.808 466.045 54.632 470.077 56.456C474.109 58.184 477.565 60.92 480.445 64.664C483.325 68.312 484.765 73.304 484.765 79.64C484.765 84.536 483.469 89.144 480.877 93.464C478.285 97.784 474.445 101.288 469.357 103.976C464.269 106.664 458.269 108.008 451.357 108.008Z"
          stroke="#4AEEF9"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M535.297 6.632C546.241 6.632 555.697 8.696 563.665 12.824C571.729 16.856 577.873 22.664 582.097 30.248C586.417 37.832 588.577 46.76 588.577 57.032C588.577 67.304 586.417 76.232 582.097 83.816C577.873 91.304 571.729 97.064 563.665 101.096C555.697 105.032 546.241 107 535.297 107H504.049V6.632H535.297ZM535.297 96.2C548.257 96.2 558.145 92.792 564.961 85.976C571.777 79.064 575.185 69.416 575.185 57.032C575.185 44.552 571.729 34.808 564.817 27.8C558.001 20.792 548.161 17.288 535.297 17.288H517.153V96.2H535.297Z"
          stroke="#4AEEF9"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M618.965 17.288V50.84H655.541V61.64H618.965V96.2H659.861V107H605.861V6.488H659.861V17.288H618.965Z"
          stroke="#4AEEF9"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M762.634 6.632L724.762 107H709.642L671.77 6.632H685.738L717.274 93.176L748.81 6.632H762.634Z"
          stroke="#4AEEF9"
          stroke-width="5"
          mask="url(#path-1-outside-1)"
        />
      </SvgCenter>
    </BackDiv>
  );
}

export default preloader;

const BackDiv = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
`;
const SvgCenter = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fill 0.5s ease forwards 5s;
  @media screen and (max-width: 450px){
    width:65%;
  }

  path:nth-child(1) {
    stroke-dasharray: 508px;
    stroke-dashoffset: 508px;
    animation: amine-stroke 2s ease forwards;
    /* animation-iteration-count: 3; */
  }
  path:nth-child(2) {
    stroke-dasharray: 483.89251708984375px;
    stroke-dashoffset: 483.89251708984375px;
    animation: amine-stroke 2.5s ease forwards 0.4s;
    /* animation-iteration-count: 2; */
  }
  path:nth-child(3) {
    stroke-dasharray: 549px;
    stroke-dashoffset: 549px;
    animation: amine-stroke 2.5s ease forwards 0.8s;
    /* animation-iteration-count: 2; */
  }
  path:nth-child(4) {
    stroke-dasharray: 336px;
    stroke-dashoffset: 336px;
    animation: amine-stroke 2.5s ease forwards 1.2s;
    /* animation-iteration-count: 2; */
  }
  path:nth-child(5) {
    stroke-dasharray: 226px;
    stroke-dashoffset: 226px;
    animation: amine-stroke 2.5s ease forwards 1.4s;
    /* animation-iteration-count: 2; */
  }
  path:nth-child(6) {
    stroke-dasharray: 493px;
    stroke-dashoffset: 493px;
    animation: amine-stroke 2.5s ease forwards 1.8s;
    /* animation-iteration-count: 2; */
  }
  path:nth-child(7) {
    stroke-dasharray: 571px;
    stroke-dashoffset: 571px;
    animation: amine-stroke 2.5s ease forwards 2.2s;
    /* animation-iteration-count: 2; */
  }
  path:nth-child(8) {
    stroke-dasharray: 463px;
    stroke-dashoffset: 463px;
    animation: amine-stroke 2.5s ease forwards 2.4s;
    /* animation-iteration-count: 2; */
  }
  path:nth-child(9) {
    stroke-dasharray: 441px;
    stroke-dashoffset: 441px;
    animation: amine-stroke 2.5s ease forwards 2.8s;
    /* animation-iteration-count: 2; */
  }

  @keyframes amine-stroke {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    from {
      fill: transparent;
    }
    to {
      fill: #4aeef9;
    }
  }
`;
