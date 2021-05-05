import React, { ReactElement } from "react";
import Carouse from "../components/Carousels/Carouse";
import Layout from "../components/Layout";

import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";

import { Card, Button, ListGroup } from "react-bootstrap";

interface Props {}

export default function indexbackup050420211208({}: Props): ReactElement {
  const dispatch = useDispatch();
  const authenReducer: any = useSelector((state) => state);
  return (
    <Layout>
      <Carouse />
      <br />
      <div className="row container">
        <div className="col-4">
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src="/imgs/CardProducts/product1.jpg" />
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>.....</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src="/imgs/CardProducts/product1.jpg" />
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>.....</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src="/imgs/CardProducts/product1.jpg" />
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>.....</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src="/imgs/CardProducts/product1.jpg" />
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>.....</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
