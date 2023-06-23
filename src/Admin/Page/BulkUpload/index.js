import axios from "axios";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import FilledBtn from "../../Components/FilledBtn";

const BulkUpload = () => {
  const [excelFile, setExcelFile] = useState(null);
  const handleSubmit = async () => {
    try {
      if (excelFile) {
        const formData = new FormData();
        formData.append("excel-file", excelFile);
        const res = await axios.post("admin/bulk-upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (res) {
          setExcelFile(null);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Form>
      <Row>
        <Col md={3}>
          <Form.Label>Attach Excel File</Form.Label>
        </Col>
        <Col md={5}>
          <Form.Control
            type="file"
            name="Excel file"
            placeholder="choose file"
            className="mb-3"
            onChange={(e) => {
              setExcelFile(e.target.files[0]);
            }}
            value={excelFile ? excelFile?.target?.value : ""}
          />
        </Col>
        <Col md={3} className="text-center">
          <FilledBtn text={"Submit"} onClick={handleSubmit} />
        </Col>
      </Row>
    </Form>
  );
};

export default BulkUpload;
