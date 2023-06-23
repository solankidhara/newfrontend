import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import UserInput from "../../../Components/common/UserInput/UserInput";

const ContentTypeUpdateForm = ({ rowData, control }) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Content Type</Form.Label>
            </Col>
            <Col md={5}>
              <UserInput type="text" name="type" control={control} defaultValue={rowData.label} />
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
};

export default ContentTypeUpdateForm;
