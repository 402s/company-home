const BrandLogo = ({ monochrome }: { monochrome?: boolean }) => {
  const monochromeColor = '#fff';
  return (
    <svg
      viewBox="0 0 127 51"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.2059 0.159058L73.7614 0.159159C80.2702 0.15919 85.5466 5.43565 85.5466 11.9445V40.7435H76.181V13.0603C76.181 11.1076 74.598 9.52469 72.6454 9.52469H51.2059V0.159058Z"
        fill={monochrome ? monochromeColor : '#81D2FF'}
      />
      <path
        d="M41.8391 9.52478H51.2047V37.208C51.2047 39.1606 52.7877 40.7436 54.7403 40.7436H76.1798V50.1092H53.6244C47.1156 50.1092 41.8391 44.8328 41.8391 38.3239V9.52478Z"
        fill={monochrome ? monochromeColor : '#FF7346'}
      />
      <path
        d="M36.6821 26.9787H27.2885V11.7292L0 27.9332V16.9892L26.9262 0.1604H36.6821V26.9787Z"
        fill={monochrome ? monochromeColor : '#6C42C5'}
      />
      <path
        d="M0.000244141 40.6078V30.5541L24.8214 30.5541C31.3303 30.5541 36.6068 35.8305 36.6068 42.3394V50.0658H27.2411V42.9648C27.2411 41.6631 26.1858 40.6078 24.8841 40.6078H0.000244141Z"
        fill={monochrome ? monochromeColor : '#FFC700'}
      />
      <path
        d="M90.3162 0.159058H112.647C116.338 0.159058 119.909 1.60258 122.579 4.15119C125.386 6.83096 126.998 10.5655 126.998 14.4464C126.998 20.4251 123.254 25.7635 117.633 27.7993L90.3162 37.6735L90.3158 26.707L114.207 18.3388C116.025 17.702 117.242 15.9857 117.242 14.0592C117.242 11.5549 115.212 9.52469 112.708 9.52469H90.3162V0.159058Z"
        fill={monochrome ? monochromeColor : '#A8A5F5'}
      />
      <path
        d="M127 40.7433H90.3179V50.1089H127V40.7433Z"
        fill={monochrome ? monochromeColor : '#6C42C5'}
      />
    </svg>
  );
};

export default BrandLogo;
