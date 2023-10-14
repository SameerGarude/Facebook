import {
  EmailOutlined,
  FacebookTwoTone,
  Instagram,
  Language,
  LinkedIn,
  MoreVert,
  Pinterest,
  Place,
  Twitter,
} from "@mui/icons-material";
import "./profile.scss";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoTone />
            </a>
            <a href="http://instagram.com">
              <Instagram />
            </a>
            <a href="http://twitter.com">
              <Twitter />
            </a>
            <a href="http://linkedin.com">
              <LinkedIn />
            </a>
            <a href="http://pinterest.com">
              <Pinterest />
            </a>
          </div>

          <div className="center">
            <span>Joe Root</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>IND</span>
              </div>
              <div className="item">
                <Language />
                <span>sammy.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>

          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>

        <Posts />
      </div>
    </div>
  );
};

export default Profile;
