import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-center align-items-center">
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
        <Link to="/likedpage" className="heart-link">
          <FaHeart size={25} />
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
