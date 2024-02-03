import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-center align-items-center">
        <div className="px-5">
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="https://www.freeiconspng.com/thumbs/popcorn-png/popcorn-png-16.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            &nbsp;<span style={{ color: "#CE3B3B" }}>T</span>v&nbsp;
            <span style={{ color: "#CE3B3B" }}>T</span>rends &nbsp;
            <img
              alt=""
              src="https://www.freeiconspng.com/thumbs/popcorn-png/popcorn-png-16.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </div>
        <div className="heart-link ">
          <Link to="/likedpage">
            <img
              src="https://cdn3.iconfinder.com/data/icons/video-player-2-1/100/video_movie_player_clip-09-512.png"
              height={35}
              width={35}
            />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
