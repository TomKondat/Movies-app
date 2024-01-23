import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>Stars: {movie.vote_average}</Card.Text>
        <Button variant="danger">Watch Trailer!</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
