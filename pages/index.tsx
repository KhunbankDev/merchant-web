import React, { ReactElement } from "react";
import LayoutWeb from "../Layouts/web/LayoutWeb";
import Carousel from "../components/Carousels/Carouse";
import ListGroupCategory from "../components/ListGroups/ListGroupCategory";

import Pagination from "../components/Paginations/Pagenation";
import { Container, Row, Col, ListGroup, Tab } from "react-bootstrap";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <LayoutWeb title="MERCHANT SHOP">
      <Carousel />
      <br />
      <Container>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={2}>
              <ListGroup>
                <ListGroup.Item as="li">ALL CATEGORY</ListGroup.Item>
                <ListGroup.Item action href="#link1">
                  category 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  category 2
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <ListGroupCategory />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <ListGroupCategory />
                </Tab.Pane>
              </Tab.Content>
              <Pagination />
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </LayoutWeb>
  );
}
