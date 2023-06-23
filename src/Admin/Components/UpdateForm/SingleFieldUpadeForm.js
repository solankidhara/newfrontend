import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import UserInput from "../../../Components/common/UserInput/UserInput";

const SingleFieldUpdateForm = ({ rowData, control ,name ,label}) => {
  
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>{label}</Form.Label>
            </Col>
            <Col md={5}>
              <UserInput type="text" name={name} control={control} defaultValue={rowData.label} />
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
};

export default SingleFieldUpdateForm;
