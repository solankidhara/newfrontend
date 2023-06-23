import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Base_URl } from "../../../app-environment";
import Dropdown from "../../../Components/common/Dropdown";
import UserInput from "../../../Components/common/UserInput/UserInput";

const ContentFormUpdate = ({ rowData, control }) => {

  const categories = useSelector(state => state.categories)
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Type of Content</Form.Label>
            </Col>
            <Col md={5}>
              <Dropdown control={control} name="contentType" options={categories.contentType} defaultValue={true} defaultIndex={categories.contentType.findIndex(x => x.label === rowData.contentType)}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Category</Form.Label>
            </Col>
            <Col md={5}>
              <Dropdown control={control} name="category" options={categories.category} defaultValue={true} defaultIndex={categories.category.findIndex(x => x.label === rowData.categoryName)}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Tag</Form.Label>
            </Col>
            <Col md={5}>
              <Dropdown control={control} name="tagOne" options={categories.tags} defaultValue={true} defaultIndex={categories.tags.findIndex(x => x.value === rowData.tag_one_id)}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>Tag 2</Form.Label>
            </Col>
            <Col md={5}>
              <Dropdown control={control} name="tagTwo" options={categories.tags} defaultValue={true} defaultIndex={categories.tags.findIndex(x => x.value === rowData.tag_one_id)}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>File Type</Form.Label>
            </Col>
            <Col md={5}>
              <Dropdown control={control} name="fileType" options={categories.fileTypes} defaultValue={true} defaultIndex={categories.fileTypes.findIndex(x => x.value === rowData.file_type)}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>License Type</Form.Label>
            </Col>
            <Col md={5}>
              <Dropdown control={control} name="licenseType" options={categories.licenses} defaultValue={true} defaultIndex={categories.licenses.findIndex(x => x.value === rowData.license_type)}/>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col md={3}>
              <Form.Label>size</Form.Label>
            </Col>
            <Col md={5}>
              <Dropdown control={control} name="size" options={categories.sizes} defaultValue={true} defaultIndex={categories.sizes.findIndex(x => x.value === rowData.size)}/>
            </Col>
          </Row>
        </Form.Group>
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
            <Col xs={6} lg={4}>
              <div className="d-flex flex-column align-items-center">
                <Form.Label>Main File</Form.Label>
                <img src={Base_URl+rowData.mainFile} width="150px" height="150px" />
              </div>
            </Col>
            <Col xs={6} lg={4}>
              <div className="d-flex flex-column align-items-center">
                <Form.Label>Thumbnail File</Form.Label>
                <img src={Base_URl+rowData.thumbFile} width="150px" height="150px" />
              </div>
            </Col>
            <Col xs={6} lg={4}>
              <div className="d-flex flex-column align-items-center">
                <Form.Label>Watermark File</Form.Label>
                <img src={Base_URl+rowData.waterMarkFile} width="150px" height="150px" />
              </div>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
};

export default ContentFormUpdate;
