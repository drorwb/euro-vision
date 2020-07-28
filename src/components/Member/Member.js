import React from "react";
import "../Member/Member.css";

export const Member = (props) => (
  <div className="member">
    <img
      className="img-fluid"
      src={require(`../../assets/members-images/${props.name}.jpg`)}
      alt={props.name}
    />
    <div className="card-body-member">
      <h4 className="card-title-member">{props.name}</h4>
      <p className="card-text-member">{props.info}</p>
      <a href={props.facebookUrl} target="_blank" rel="noopener noreferrer">
        <img
          className="facebook-icon"
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          width="30px"
          height="30px"
          alt=""
        />
      </a>
      <a href={props.linkedinUrl} target="_blank" rel="noopener noreferrer">
        <img
          className="linkedin-icon"
          href={props.linkedinUrl}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/600px-Linkedin.svg.png"
          width="30px"
          height="30px"
          alt=""
        />
      </a>
      <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
        <img
          className="github-icon"
          href={props.githubUrl}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1024px-Font_Awesome_5_brands_github.svg.png"
          width="30px"
          height="30px"
          alt=""
        />
      </a>
    </div>
  </div>
);
