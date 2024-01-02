import React from "react";
import Layout from "../components/Layout.jsx";

import Pfp from "../../static/pfp.jpg";

import "../styles/global.css";
import "../styles/about.css";
import Nav from "../components/Nav";

function About() {
  return (
    <Layout>
      <div className="about-page">
        <div className="about-dialogue">
          <div className="h-wrap">
            <h1>About Me</h1>
          </div>
          <img src={Pfp} alt="Profile" id="about-img" />
          <p id="about-intro">
            I am a Computer Science Enthusiast, A Developer, UI Designer and an
            Entrepreneur with a passion for learning and creating. I am a
            student at Bharati Vidyapeeth College of Engineering, Pune. I have
            experience working with various tech stacks and technologies. I am
            excited to continue learning and growing as an individual.
          </p>
          <p>
            As a child I had always been interested in the field of Engineering
            as a whole. I was always fascinated by the way things worked and how
            they were made.
          </p>
          <br /> <br />
          When I am not coding, I enjoy playing video games, watching movies,
          and spending time with my family. I am a huge fan of the Marvel
          Cinematic Universe and the Star Wars franchise. I also enjoy watching
          anime and reading manga. I am a huge fan of the Dragon Ball franchise
          and I am currently watching My Hero Academia. I am also a huge fan of
          the Legend of Zelda franchise and I am currently playing through
          Breath of the Wild. I am also a huge fan of the Final Fantasy
          franchise and I am currently playing through Final Fantasy VII Remake.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum
          eligendi velit laborum totam nam at? Facilis aut non hic labore
          corrupti ad neque in? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Velit sit dolor sapiente delectus officiis autem
          laudantium, voluptate reiciendis beatae ullam nesciunt itaque modi
          suscipit perspiciatis fugiat doloremque at magnam a. Eaque, vel quos
          qui eveniet ex repellat repellendus asperiores aspernatur.
          {/* </p> */}
          <img src={Pfp} alt="" id="img2" />
        </div>
      </div>
    </Layout>
  );
}

export default About;
