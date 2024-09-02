export default function WavyLine() {
    return (
        <div className="absolute bottom-0 w-screen h-20 z-20">
        <svg
          className="w-screen h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF" /* Change this to your desired color */
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,218.7C672,224,768,160,864,138.7C960,117,1056,139,1152,170.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
  