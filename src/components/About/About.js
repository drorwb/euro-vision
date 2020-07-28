import React from "react";
import { Member } from "../Member/Member";
import "../About/About.css";

export const About = () => {
  const members = [
    {
      name: "Dror Brown",
      facebookUrl: "https://www.facebook.com/dror.brown",
      linkedinUrl: "https://www.linkedin.com/in/dror-brown-404930177/",
      githubUrl: "https://github.com/drorwb",
      info: "Full Stack Developer, excels in React and frontend tasks",
    },
    {
      name: "Jonathan Morag",
      facebookUrl: "https://www.facebook.com/moragjonathan",
      linkedinUrl: "https://www.linkedin.com/in/jonathan-morag/",
      githubUrl: "https://github.com/jonathanmorag",
      info: "Full Stack Developer, excels in Node.js and backend tasks",
    },
    {
      name: "Noa Feldberg",
      facebookUrl: "https://www.facebook.com/noa7feld",
      linkedinUrl: "https://www.linkedin.com/in/noa-feldberg-9b5917148/",
      githubUrl: "https://github.com/noaFeldberg",
      info: "Full Stack Developer and Automation Java Developer",
    },
    {
      name: "Tommer Grodecki",
      facebookUrl: "https://www.facebook.com/tommer.grodecki",
      linkedinUrl: "https://www.linkedin.com/in/tommer-grodecki-82843b174/",
      githubUrl: "https://github.com/Tommergro",
      info: "Algorithms and Neural Networks expert",
    },
    {
      name: "Ran Manor",
      facebookUrl: "https://www.facebook.com/ran.manor.7",
      linkedinUrl: "https://www.linkedin.com/in/ran-manor-7b86ab186/",
      githubUrl: "https://github.com/ranmanor",
      info: "Algorithms and Neural Networks expert",
    },
  ];

  return (
    <div>
      <h2>About Us</h2>
      <br />
      <p>
        What if you could know which international team is going to win the next
        fixture, or which one will qualify through to the next round, or even
        know the winner of the final game in the upcoming Euro 2020 tournament?
      </p>
      <br />
      <p>
        Our team’s goal is to help all of those people who place bets on big
        tournaments around the world. This is why we created -{" "}
        <strong>“Euro-Vision”</strong>.
      </p>
      <p>
        “Euro-Vision” is a machine learning algorithm aimed at predicting the
        outcome of the upcoming Euro 2020. Who will win, who will lose and who
        will be crowned as champions! Our model calculates each match's outcome
        probabilities - we do that based on the historical results from all the
        international games from 1930 until today, including FIFA ranking of the
        national teams, overall players score, trophies and more.
      </p>
      <p></p>
      <div className="members-container">
        {members.map((member, key) => {
          return (
            <Member
              key={key}
              name={member.name}
              photo={member.photo}
              facebookUrl={member.facebookUrl}
              linkedinUrl={member.linkedinUrl}
              githubUrl={member.githubUrl}
              info={member.info}
            />
          );
        })}
      </div>
    </div>
  );
};
