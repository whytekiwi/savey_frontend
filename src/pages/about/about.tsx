import React from "react";
import wishSingle from "../../assets/img/wish-single.svg";
import wishApp from "../../assets/img/wish-app.svg";
import "../pages.sass";

const About = () => {
  return (
    <div className="page-content">
      <div className="row">
        <img src={wishSingle} alt="An example wish" />
        <div>
          <h1>Meet the wish</h1>
          <p>
            Wishes are small little messages from you to Libby. They look a bit
            like this.
          </p>
          <p>
            Each wish can have a photo, and a video. And you add your name so
            Libby can see who made it.
          </p>
          <p>
            There are also some tags you can select. These will help Libby find
            wishes to match her mood. Use as many as you'd like!
          </p>
          <p>
            Finally, pick a nice bright color. Remember that your picture will
            end up with a nice white border, so don't be too worried if the
            color clashes with your photo.
          </p>
          <p>
            If you need to come back to a wish, take a note of your unique id.
            This acts like a password to your wish, and you can resume whenever
            you'd like.
          </p>
        </div>
      </div>
      <div className="row">
        <div>
          <h1>On the big day</h1>
          <p>
            When it's time for Libby's birthday, I'll wrap all the individual
            wishes together into an app.
          </p>
          <p>
            Libby will be able to search by name, or tag. And she can click on
            your amazing photo to view the video uploaded by you.
          </p>
          <p>
            This way, Libby will have a whole lot of happiness in her pocket,
            ready to view whenever she wants!
          </p>
          <h3>
            If you're having any trouble at all with the site, or if videos
            aren't uploading, please feel free to{" "}
            <a href="mailto:wishes@whyte.kiwi">email me</a> and we can make it
            work, even when the website doesn't!
          </h3>
        </div>
        <img src={wishApp} alt="An example wish" />
      </div>
    </div>
  );
};

export default About;
