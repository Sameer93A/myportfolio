import githubLogo from "../assets/github-mark-white.svg";

export const NavBar = () => {
  return (
    <div className="sm:flex justify-around backdrop-blur-sm shadow-md opacity-100">
      <div className="p-5">
        <button>
          <div className="text-xl font-opensans font-bold  text-white">
            Sameer Ahmed
          </div>
        </button>
      </div>
      <div className="flex text-white">
        <button>
          <div className="ml-5">Home</div>
        </button>
        <button>
          <div className="ml-5">Projects</div>
        </button>
        <button>
          <div className="ml-5">About</div>
        </button>
        <button>
          <div className="ml-5">Blog</div>
        </button>
        <button>
          <div className="ml-5">Contact</div>
        </button>
        <div className="ml-2 mt-5 box-border h-7 border-l"></div>
        <button>
          <div className="ml-2">
            <a href="https://www.google.com">
              <img className="h-[25px]" src={githubLogo} alt="" />
            </a>
          </div>
        </button>
      </div>
    </div>
  );
};
