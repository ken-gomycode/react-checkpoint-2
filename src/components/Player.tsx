import { Card } from "react-bootstrap";
import {PlayerType} from "../types.ts";
import {FC} from "react";

const Player: FC<PlayerType> = (props) => {
  const { name, age, nationality, jerseyNumber, imageUrl, team } = props;
  return (
    <Card style={{ width: "18rem", margin: "10px", textAlign: "center" }}>
      <Card.Img variant="top" height={250} width={'100%'} style={{ objectFit: 'cover' }} src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
