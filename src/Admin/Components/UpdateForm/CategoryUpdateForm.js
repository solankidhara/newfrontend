import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Base_URl } from "../../../app-environment";
import UserInput from "../../../Components/common/UserInput/UserInput";

const CategoryFormUpdate = ({ rowData, control }) => {
  return (
    <>
      <Form>

        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Content Name</Form.Label>
            </Col>
            <Col md={5}>
              <UserInput type="text" name="name" control={control} defaultValue={rowData.name} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Description</Form.Label>
            </Col>
            <Col md={5}>
              <UserInput type="text" name="description" control={control} defaultValue={rowData.description} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col>
              <div className="d-flex flex-column align-items-center">
                <Form.Label>Thumbnail Image</Form.Label>
                <img src={Base_URl+ rowData.thumbNailImg} width="150px" height="150px" />
              </div>
            </Col>
          </Row>
        </Form.Group>
        
      </Form>
    </>
  );
};

export default CategoryFormUpdate;
