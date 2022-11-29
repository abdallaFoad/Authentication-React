import React from "react";
import man from "../assets/formalMan.png";
import "../style/Dashboard.scss";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Context";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const handelLogout = async () => {
    try {
      await logout();
      navigate('/signup')
    } catch {
      setError("Field Logout");
    }
    return setError(''); 
  };




  return (
    <div className="main-dashboard">
      <div className="container  mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <div className="img">
              <img src={man} alt="img" height="100" width="100" />
            </div>
            <span class="name mt-3 w-100">
              Email: {currentUser && currentUser.email}
            </span>
            <span class="idd">@eleanorpena</span>
            <div class="d-flex flex-row justify-content-center align-items-center gap-2">
              <span class="idd1">Oxc4c16a645_b21a</span>
              <span>
                <i class="fa fa-copy"></i>
              </span>
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3">
              <span class="number">
                1069 <span class="follow">Followers</span>
              </span>
            </div>
            <div class="buttons d-flex mt-2">
              <Link to="update-profile" class="btn1 btn-dark">
                Edit Profile
              </Link>
              <button onClick={handelLogout} class="btn1 btn10 btn-dark">
                Log Out
              </button>
              {error && <div className="matched">{error}</div>}
            </div>
            <div class="text mt-3">
              <span>
                Eleanor Pena is a creator of minimalist's x bold graphics and
                digital artwork. Artist/ Creative Director by Day #NFT minting@
                with FND night.
              </span>
            </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
              <div className="social">
                <a
                  href="https://www.facebook.com/abdalla.foad.50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiFacebookFill className="facebook" />
                </a>
                <a
                  href="https://www.instagram.com/abdallafoad74/?fbclid=IwAR3cVpszml-H46u4m3b6Kmr51ag8abvsL1f9SFGVBqndZrlMraBAHrKSzM8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdofoad1179674/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://twitter.com/abdallafoad74?fbclid=IwAR3kCOmht_taY7AnJT7rgRTqX5pdG0PrDRQ5bBWcJlUipBvMrp_IwWRMFM0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </div>
            </div>
            <div class=" px-2 rounded mt-4 date ">
              <span class="join">Joined {date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
