import axios from "axios";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addLicense } from "../../../Redux/Slice/category-slice";
import { licenseTableField } from "../../Constance/LicenseTableData";
import UserInput from "../../../Components/common/UserInput/UserInput";
import CustomDatepicker from "../../Components/CustomDatepicker";
import CustomTable from "../../Components/CustomTable";
import FilledBtn from "../../Components/FilledBtn";

const schema = Joi.object({
  name: Joi.string().required(),
});

const License = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const licenses = useSelector((state) => state.categories.licenses);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    (async () => {
      const licenses = await axios.get("/admin/license");
      dispatch(addLicense(licenses.data));
    })();
  }, [show, dispatch]);

  const {
    control,
    handleSubmit,
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (content) => {
    try {
      const res = await axios.post("admin/license", content);
      if (res.status === 200) {
        const license = await axios.get("/admin/license");
        dispatch(addLicense(license.data));
        setShow(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Row className="mb-5">
        <Col>
          <h4>List View Of License</h4>
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
        columns={licenseTableField}
        rows={licenses}
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
                  <Form.Label>License Name</Form.Label>
                </Col>
                <Col md={5}>
                  <UserInput type="text" name="name" control={control} />
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

export default License;
