import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import {
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
  Navbar,
  Badge,
  ButtonGroup,
  Image,
} from "react-bootstrap";

import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

interface Props {}

export default function Header({}: Props): ReactElement {
  const dispatch = useDispatch();
  const authenReducer: any = useSelector((state) => state);

  const CheckLogin = () => {
    if (authenReducer.authenWeb.user === null) {
      return (
        <Link href="/">
          <a className="mt-3">sign in</a>
        </Link>
      );
    } else {
      return (
        <NavDropdown
          title="Name MerchantShop"
          id="collasible-nav-dropdown"
          className="mt-1"
        >
          <NavDropdown.Item href="#action/3.1">
            ประวัติสั่งซื้อ
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">รายการสั่งซื้อ</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">โปรไฟล์</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">ออกจากระบบ</NavDropdown.Item>
        </NavDropdown>
      );
    }
  };

  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/imgs/Logo/logo-merchant.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            MERCHANT SHOP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav> </Nav>
            <Nav className="flex-fill">
              <Form inline className="d-flex w-100">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 "
                />
                <Button variant="primary ms-2">Search</Button>
              </Form>
            </Nav>
            <Nav className="flex-fill justify-content-end">
              <Button variant="link" style={{ textAlign: "left" }}>
                <FaShoppingCart style={{ fontSize: 30, color: "aliceblue" }} />
                <Badge
                  pill
                  variant="danger"
                  style={{ backgroundColor: "crimson", height: "1.3rem" }}
                >
                  9
                </Badge>
              </Button>
              <ButtonGroup aria-label="Basic example">
                <Image
                  src="/imgs/Profiles/profile-default.jpg"
                  roundedCircle
                  style={{ width: 30, height: 30 }}
                  className="m-2"
                />

                {CheckLogin()}
              </ButtonGroup>

              <Nav.Link href="#"></Nav.Link>
              <Nav.Link href="#"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}
