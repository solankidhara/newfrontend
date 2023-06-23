import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import Joi from "joi";
import { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import UserInput from "../../../Components/common/UserInput/UserInput";
import { addSizes } from "../../../Redux/Slice/category-slice";
import CustomDatepicker from "../../Components/CustomDatepicker";
import CustomTable from "../../Components/CustomTable";
import FilledBtn from "../../Components/FilledBtn";
import { sizeTableField } from "../../Constance/sizeTableData";

const schema = Joi.object({
  name: Joi.string().required(),
});

const Sizes = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.categories.sizes);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    (async () => {
      const sizes = await axios.get("/admin/size");
      dispatch(addSizes(sizes.data));
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
      const res = await axios.post("admin/size", content);
      if (res.status === 200) {
        const size = await axios.get("/admin/size");
        dispatch(addSizes(size.data));
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
          <h4>List View Of Size</h4>
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
        columns={sizeTableField}
        rows={sizes}
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
                  <Form.Label>Size</Form.Label>
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

export default Sizes;
