import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout.jsx";

import "../styles/blog-page.css";
import "../styles/global.css";

function Blog() {
  const envelope = <FontAwesomeIcon icon={faEnvelope} />;
  return (
    <Layout>
      <div className="blog-page">
        <div className="blog-wrapper">
          <div className="blog-header">
            <div className="super">
              <p className="where">
                <span id="special">Engineering & Computer Science </span> / Web
                Development
              </p>
              <div className="share">
                <a href="https://www.facebook.com">fb</a>
                <a href="https://www.twitter.com">tw</a>
                <a href="https://www.linkedin.com">in</a>
                <a href="https://www.instagram.com">ig</a>
              </div>
            </div>
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              laudantium iure officia.
            </h1>
            {/* <p id="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, quia, tempore, quos voluptatum volu
            </p> */}
            <br />
            <div className="featured-img">
              <img
                src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                id="featuredImg"
              />
            </div>
          </div>
          <hr />
          <div className="blog-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              inventore sit totam minus ea iste, sequi ipsa odit omnis harum,
              soluta perferendis quod perspiciatis, quisquam impedit architecto
              ex delectus corporis! At nesciunt in numquam cupiditate.
              Recusandae ut vel nostrum provident unde voluptate facilis
              cupiditate? Placeat esse eveniet quae ad voluptatibus inventore id
              nemo quam ut suscipit obcaecati perferendis non dolore aliquid ex
              voluptate recusandae, corrupti dolor repellat tempora iste? Totam
              quo, cumque est sequi minima error consequuntur? Ut, aperiam quia
              dolore itaque tempora temporibus in sunt quibusdam architecto
              nobis et, autem quasi ipsum totam eveniet? Distinctio modi
              voluptatum voluptate quidem iste maiores numquam, deleniti tempore
              sed culpa alias tempora minus totam cumque in, voluptatem ut
              exercitationem error et?{" "}
            </p>
            <p>
              Ab, voluptatum, debitis eum iusto quasi perspiciatis dolore cum
              aspernatur accusantium voluptatibus dolorum? Praesentium fuga
              dolore, voluptas blanditiis aliquid fugiat ullam, nulla ut
              mollitia dignissimos voluptatum ipsum dicta eius beatae ex
              distinctio quo eos accusantium itaque sunt. Temporibus mollitia,
              architecto magnam aut eius odio distinctio illo exercitationem
              tempora, expedita, cum dolorum at quia quibusdam nemo atque minima
              ab maiores blanditiis reprehenderit? Possimus minima id
              exercitationem quis quidem quae fugit, quibusdam obcaecati
              repellat iure! Voluptates provident quae non perferendis cum,
              harum aliquid ratione vel vero ipsa quia omnis amet deserunt
              voluptatem repellendus incidunt ab magnam doloribus! Vero eum
              dignissimos, non veritatis consequatur, quam id perferendis
              distinctio, necessitatibus dicta nemo rem blanditiis? A libero
              impedit, aliquid delectus aut unde assumenda rem recusandae
              repudiandae consequatur numquam culpa minima dignissimos, deserunt
              laudantium quis? Incidunt, ea vel!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
