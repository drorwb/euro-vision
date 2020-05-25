import React from "react";
import { Member } from "../Member/Member";
import "../About/About.css";

export const About = () => {
  const members = [
    {
      name: "Dror Brown",
      photo:
        "https://media-exp1.licdn.com/dms/image/C4D03AQEU8lYWkmpA_w/profile-displayphoto-shrink_800_800/0?e=1596067200&v=beta&t=mCLYrZ1wkfULEQeRLX1YeSijZuo9e694IKPfDmiktJs",
      facebookUrl: "https://www.facebook.com/dror.brown",
      linkedinUrl: "https://www.linkedin.com/in/dror-brown-404930177/",
    },
    {
      name: "Jonathan Morag",
      photo:
        "https://media-exp1.licdn.com/dms/image/C4E03AQHy6QIYFkqG8w/profile-displayphoto-shrink_400_400/0?e=1596067200&v=beta&t=ds6gaMuF3-Uz3Ue973ofnFhcpHVrDwdB8vLIyJ9pTbc",
      facebookUrl: "https://www.facebook.com/moragjonathan",
      linkedinUrl: "https://www.linkedin.com/in/jonathan-morag/",
    },
    {
      name: "Noa Feldberg",
      photo:
        "https://media-exp1.licdn.com/dms/image/C5603AQFXOp3q0PQGHw/profile-displayphoto-shrink_800_800/0?e=1596067200&v=beta&t=-ZkLEb-VAMkGErHKa4F9DYkpyLopNVXRuaOPs4VKcOA",
      facebookUrl: "https://www.facebook.com/noa7feld",
      linkedinUrl: "https://www.linkedin.com/in/noa-feldberg-9b5917148/",
    },
    {
      name: "Tommer Grodecki",
      photo:
        "https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/36763528_10213830126041576_5067445927581581312_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=YL1IKYmWLeYAX__Y5Y2&_nc_ht=scontent.ftlv5-1.fna&oh=27ffdfda767900efb048e7c70e59af76&oe=5EF145DB",
      facebookUrl: "https://www.facebook.com/tommer.grodecki",
      linkedinUrl: "https://www.linkedin.com/in/tommer-grodecki-82843b174/",
    },
    {
      name: "Ran Manor",
      photo:
        "https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.0-8/p960x960/15194325_10206981167081058_8811371235164414266_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=iNoKN9G3OHgAX8jofs9&_nc_ht=scontent.ftlv5-1.fna&_nc_tp=6&oh=93e807eaed701b9c9392e314a0657af2&oe=5EEF55B6",
      facebookUrl: "https://www.facebook.com/ran.manor.7",
      linkedinUrl: "https://www.linkedin.com/in/ran-manor-7b86ab186/",
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
            />
          );
        })}
      </div>
    </div>
  );
};
