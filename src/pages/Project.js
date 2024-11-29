import React from "react";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden ">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-20 absolute bottom-0"
      />
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        <ProjectCard
          name={"VoteBoost Website"}
          image={"/project/evm-demo.png"}
          about={
            "Promote your election campaign seamlessly with this website, optimized for both web and mobile devices."
          }
          code={"https://github.com/Alok-jaiswal"}
        />
        <ProjectCard
          name={"ChatGPT Clone 💬"}
          image={"/project/gpt-image.png"}
          about={
            "Similar to chatGPT, this platform is designed to assist users in addressing their queries. It's an excellent resource to tackle any code-related issue or inquiry you may have."
          }
          code={"https://github.com/Alok-jaiswal/chat-gpt-clone"}
        />
      </div>
    </div>
  );
}

export default Project;
