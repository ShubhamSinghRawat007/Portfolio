import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constansts";

const Tech = () => {
  const [displayedTechnologies, setDisplayedTechnologies] = useState(technologies);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDisplayedTechnologies(technologies); // Display all balls for laptop or bigger
      } else {
        setDisplayedTechnologies(technologies.slice(0, 8)); // Display only 6 balls for smaller screens
      }
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Run on initial load
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {displayedTechnologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
