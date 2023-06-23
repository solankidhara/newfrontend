import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import UserInput from "../../../Components/common/UserInput/UserInput";

const TagUpdateForm = ({ rowData, control }) => {
  
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Tag Name</Form.Label>
            </Col>
            <Col md={5}>
              <UserInput type="text" name="tagName" control={control} defaultValue={rowData.label} />
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
};

export default TagUpdateForm;
