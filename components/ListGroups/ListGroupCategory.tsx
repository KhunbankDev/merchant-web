import React, { ReactElement } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import CardItems from "../../components/Card/CardItems";
interface Props {}

export default function ListGroupCategory({}: Props): ReactElement {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        SHOP
      </ListGroup.Item>
      <ListGroup.Item as="li" className="text-center ps-5">
        <Row>
          <Col sm={4} className="pt-2">
            <CardItems />
          </Col>
          <Col sm={4} className="pt-2">
            <CardItems />
          </Col>
          <Col sm={4} className="pt-2">
            <CardItems />
          </Col>
          <Col sm={4} className="pt-2">
            <CardItems />
          </Col>
          <Col sm={4} className="pt-2">
            <CardItems />
          </Col>
          <Col sm={4} className="pt-2">
            <CardItems />
          </Col>
          <Col sm={4} className="pt-2">
            <CardItems />
          </Col>
          <Col sm={4} className="pt-2">
            <CardItems />
          </Col>
          <Col sm={4} className="pt-2">
            <CardItems />
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  );
}
