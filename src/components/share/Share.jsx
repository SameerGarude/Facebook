import "./share.scss";
import live from "../../assets/live.png";
import feeling from "../../assets/feeling.png";
import photos from "../../assets/photos.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={currentUser.profilePic} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind, ${currentUser.name} ?`}
          />
        </div>

        <hr />

        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={photos} alt="" />
                <span>Photo /Video</span>
              </div>
            </label>

            <div className="item">
              <img src={live} alt="" />
              <span>Live Video</span>
            </div>

            <div className="item">
              <img src={feeling} alt="" />
              <span>Feeling/ Activity</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
