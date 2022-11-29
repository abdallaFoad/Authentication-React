import React from "react";
import { useState } from "react";
import { useAuth } from "../context/Context";
import img from "../assets/formalMan.png";
import "../style/UpdateProfile.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();
  const passConfirmRef = useRef();
  const navigate = useNavigate();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handelChange = (e) => {
    e.preventDefault();
    if (passRef.current.value !== passConfirmRef.current.value) {
      setError("Field Your Passwords Don't Match");
    } else {
      const promises = [];
      setError("");
      setLoading(true);
      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateUserEmail(emailRef.current.value));
      }
      if (passRef.current.value !== currentUser.password) {
        promises.push(updateUserPassword(passRef.current.value));
      }
      Promise.all(promises)
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          setError("Filed To Update Your Profile");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="main-update">
      <div class="container" style={{ padding: "5rem" }}>
        <h1>Edit Profile</h1>
        {error && <div className="error">{error}</div>}
        <hr />
        <div class="row" className="row">
          <div class="col-md-3" className="content-img">
            <div class="text-center" className="avatarImg">
              <img
                src={image ? image : img}
                style={{ borderRadius: "50%" }}
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>
              <input
                type="file"
                class="form-control"
                onChange={onImageChange}
              />
            </div>
          </div>
          <div
            class="col-md-9 personal-info"
            className="personal"
            style={{ padding: "5rem" }}
          >
            <h3>Personal info</h3>
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-lg-3 control-label">Email:</label>
                <div class="col-lg-8">
                  <input
                    class="form-control"
                    type="text"
                    defaultValue={currentUser.email}
                    ref={emailRef}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">Password:</label>
                <div class="col-md-8">
                  <input
                    class="form-control"
                    type="password"
                    ref={passRef}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">Confirm password:</label>
                <div class="col-md-8">
                  <input
                    class="form-control"
                    type="password"
                    ref={passConfirmRef}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label"></label>
                <div class="col-md-8" style={{ display: "flex", gap: "1rem" }}>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handelChange}
                    disabled={loading}
                  >
                    Change
                  </button>
                  <button class="btn btn-danger" onClick={() => navigate("/")}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default UpdateProfile;
