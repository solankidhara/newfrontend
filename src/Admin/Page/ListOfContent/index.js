import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import Joi from "joi";
import { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../../Components/common/Dropdown";
import UserInput from "../../../Components/common/UserInput/UserInput";
import {
  addCategories,
  addContent,
  addContentType,
  addFileType,
  addLicense,
  addSizes,
  addTags,
} from "../../../Redux/Slice/category-slice";
import CustomDatepicker from "../../Components/CustomDatepicker";
import CustomTable from "../../Components/CustomTable";
import FilledBtn from "../../Components/FilledBtn";
import { listOfContetField } from "../../Constance/listOfContentData";

const schema = Joi.object({
  name: Joi.string().required(),
  category: Joi.optional(),
  contentType: Joi.optional(),
  tagOne: Joi.optional(),
  tagTwo: Joi.optional(),
  fileType: Joi.optional(),
  licenseType: Joi.optional(),
  size: Joi.optional(),
  description: Joi.string().optional(),
  mainFile: Joi.optional(),
  thumbFile: Joi.optional(),
  waterMarkFile: Joi.optional(),
});

const ListOfContent = () => {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChacked] = useState(false);

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.category);
  const contentType = useSelector((state) => state.categories.contentType);
  const contentList = useSelector((state) => state.categories.content);
  const tagList = useSelector((state) => state.categories.tags);
  const fileTypes = useSelector((state) => state.categories.fileTypes);
  const licenses = useSelector((state) => state.categories.licenses);
  const sizes = useSelector((state) => state.categories.sizes);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    control,
    handleSubmit,
    setValue,
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (content) => {
    try {
      const formData = new FormData();
      formData.append("content_type_id", content.contentType.value);
      formData.append("name", content.name);
      formData.append("description", content.description);
      formData.append("category_id", content.category.value);
      formData.append("tagOne", content.tagOne.value);
      formData.append("tagTwo", content.tagTwo.value);
      formData.append("file_type_id", content.fileType.value);
      formData.append("license_type_id", content.licenseType.value);
      formData.append("size_id", content.size.value);
      formData.append("mainFile", content.mainFile);
      formData.append("thumbFile", content.thumbFile);
      formData.append("waterMarkFile", content.waterMarkFile);
      formData.append("isFree", isChecked);
      const res = await axios.post("admin/add-content", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 200) {
        setShow(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = async (e, name) => {
    setValue(name, e.target.files[0]);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/admin/category");
      const response = await axios.get("/admin/content-type");
      const res = await axios.get("/admin/content-list");
      const tags = await axios.get("/admin/tag");
      const fileTypes = await axios.get("/admin/file-type");
      const licenseTypes = await axios.get("/admin/license");
      const sizes = await axios.get("/admin/size");

      dispatch(addContentType(response.data));
      dispatch(addCategories(data));
      dispatch(addTags(tags.data));
      dispatch(addContent(res.data));
      dispatch(addFileType(fileTypes.data));
      dispatch(addLicense(licenseTypes.data));
      dispatch(addSizes(sizes.data));
    })();
  }, [show, dispatch]);

  return (
    <>
      <Row className="mb-5">
        <Col>
          <h4>List View Of Content</h4>
        </Col>
        <Col className="text-end">
          <div className="d-inline-block me-3">
            <Form.Select style={{ height: "40px" }}>
              <option>Select Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <CustomDatepicker className={"me-3"} />
          <FilledBtn text="Add Data" onClick={handleShow} />
        </Col>
      </Row>
      <CustomTable
        columns={listOfContetField}
        rows={contentList}
        dataKey={"_id"}
        size={"large"}
        paginator={true}
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rowsLimit={10}
        rowsPerPageOptions={[10, 50, 100]}
      />
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>No</Form.Label>
                </Col>
                <Col md={5}>
                  <Form.Control type="text" placeholder="Enter Text" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Type of Content</Form.Label>
                </Col>
                <Col md={5}>
                  <Dropdown
                    control={control}
                    name="contentType"
                    options={contentType}
                    defaultValue={true}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Category</Form.Label>
                </Col>
                <Col md={5}>
                  <Dropdown
                    control={control}
                    name="category"
                    options={categoryList}
                    defaultValue={true}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Tag</Form.Label>
                </Col>
                <Col md={5}>
                  <Dropdown
                    control={control}
                    name="tagOne"
                    options={tagList}
                    defaultValue={true}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Tag_2</Form.Label>
                </Col>
                <Col md={5}>
                  <Dropdown
                    control={control}
                    name="tagTwo"
                    options={tagList}
                    defaultValue={true}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>File Type</Form.Label>
                </Col>
                <Col md={5}>
                  <Dropdown
                    control={control}
                    name="fileType"
                    options={fileTypes}
                    defaultValue={true}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>license type</Form.Label>
                </Col>
                <Col md={5}>
                  <Dropdown
                    control={control}
                    name="licenseType"
                    options={licenses}
                    defaultValue={true}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>size</Form.Label>
                </Col>
                <Col md={5}>
                  <Dropdown
                    control={control}
                    name="size"
                    options={sizes}
                    defaultValue={true}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Name</Form.Label>
                </Col>
                <Col md={5}>
                  <UserInput type="text" name="name" control={control} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Description</Form.Label>
                </Col>
                <Col md={5}>
                  <UserInput type="text" name="description" control={control} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>Id</Form.Label>
                </Col>
                <Col md={5}>
                  <Form.Control type="text" placeholder="Content Name" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col md={3}>
                  <Form.Label>MainFile</Form.Label>
                </Col>
                <Col md={5}>
                  <Form.Control
                    type="file"
                    name="mainFile"
                    placeholder="mainFile"
                    className="mb-3"
                    onChange={(e) => {
                      handleChange(e, "mainFile");
                    }}
                  />
                </Col>
              </Row>

              <Row>
                <Col md={3}>
                  <Form.Label>thumbFile</Form.Label>
                </Col>
                <Col md={5}>
                  <Form.Control
                    type="file"
                    name="thumbFile"
                    className="mb-3"
                    onChange={(e) => {
                      handleChange(e, "thumbFile");
                    }}
                  />
                </Col>
              </Row>

              <Row>
                <Col md={3}>
                  <Form.Label>waterMarkFile</Form.Label>
                </Col>
                <Col md={5}>
                  <Form.Control
                    type="file"
                    name="waterMarkFile"
                    className="mb-3"
                    onChange={(e) => {
                      handleChange(e, "waterMarkFile");
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <Form.Label>IsFree</Form.Label>
                </Col>
                <Col md={5}>
                  <Form.Check
                    type="checkbox"
                    onChange={(event) => setIsChacked(event.target.checked)}
                    label={"check if content free."}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <FilledBtn text={"Save"} onClick={handleSubmit(onSubmit)} />
          <FilledBtn text={"Cancel"} onClick={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListOfContent;
