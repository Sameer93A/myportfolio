import image from "../assets/profile-pic.png";

export const Project = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div
          id="Projects"
          className="text-white font-bold text-2xl text-left box-border w-[650px] border-b-4 border-white "
        >
          PROJECTS
        </div>
      </div>
      <div className="flex justify-center mt-10 gap-10">
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="flex justify-center mt-10 gap-10">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

function ProjectCard() {
  return (
    <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <div className="flex justify-center">
          <img className="rounded-t-lg h-[100px]" src={image} alt="" />
        </div>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Project Title
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">
          Samll Description about project
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Link to Project
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
