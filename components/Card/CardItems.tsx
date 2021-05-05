import React, { ReactElement } from "react";
import { Card, Button } from "react-bootstrap";
interface Props {}

export default function CardItems({}: Props): ReactElement {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/imgs/CardProducts/product1.jpg" />
      <Card.Body>
        <Card.Title>TitleName</Card.Title>
        <Card.Text>รายละเอียด</Card.Text>
        <Button variant="primary">1,000 บาท</Button>
      </Card.Body>
    </Card>
  );
}
