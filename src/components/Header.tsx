import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function Header() {
  return (
    <>
      <div className="flex items-start gap-5">
        <div className="w-24 h-24">
          <img
            className="rounded-full"
            src="https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg"
            alt="Profile"
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Suraj Singh Rajput</h1>
          <div className="text-md font-medium text-neutral-500">
            <p>React Developer</p>
            <p>He/Him</p>
          </div>
          <div className="social-media my-2 flex items-center gap-1">
            <span>
              <a
                href="https://www.linkedin.com/in/suraj-rajput-839b4b19a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </span>
            <span>
              <a href="https://github.com/Rajput-Suraj" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare />
              </a>
            </span>
            <span>
              <a href="mailto: surajarajput@gmail.com" target="_blank" rel="noopener noreferrer">
                <BiLogoGmail />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
