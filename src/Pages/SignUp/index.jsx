import { Alert, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserButton from "../../Components/common/UserButton/UserButton";
import { joiResolver } from "@hookform/resolvers/joi";
import UserInput from "../../Components/common/UserInput/UserInput";
import classes from "./index.module.css";

import { useForm } from "react-hook-form";

import Joi from "joi";
import Dropdown from "../../Components/common/Dropdown";
import axios from "axios";

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().required(),
  mobNumber: Joi.string().required(),
  birthDate: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  countryCode: Joi.required(),
});

const countryCode = [
  {
    value: "+1",
    label: "+1",
  },
  {
    value: "+2",
    label: "+2",
  },
  {
    value: "+91",
    label: "+91",
  },
];

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await axios.post("/users/sign-up", { ...data, countryCode: data.countryCode.value ,role:"user"});
    if (res.status === 200 || res.data?.token) {
      // localStorage.setItem("token", res.data.token);
      return navigate("/signin");
    }
  };
  return (
    <div className={"container-fluid " + classes.bg}>
      <div className={classes.cardcontainer}>
        <div className={classes.card}>
          <div className={classes.title}>Sign Up</div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col xs={12} lg={6}>
                <UserInput type="text" placeholder="First Name" name="firstName" bs-class="mt-4" control={control} fieldClass={true} />
                {errors?.firstName && (
                  <Alert className={"p-2 mt-3 ms-4"} style={{ marginRight: "55px" }} variant="danger">
                    {" "}
                    {errors.firstName?.message}
                  </Alert>
                )}

                <UserInput type="text" placeholder="Last Name" name="lastName" bs-class="my-4" control={control} fieldClass={true} />
                {errors?.lastName && (
                  <Alert className={"p-2 mt-3 ms-4"} style={{ marginRight: "55px" }} variant="danger">
                    {" "}
                    {errors.lastName?.message}
                  </Alert>
                )}

                <UserInput type="text" placeholder="User Name" name="userName" bs-class="my-4" control={control} fieldClass={true} />

                {errors?.userName && (
                  <Alert className={"p-2 mt-3 ms-4"} style={{ marginRight: "55px" }} variant="danger">
                    {" "}
                    {errors.userName?.message}
                  </Alert>
                )}

                <div className={`d-flex align-items-center ${classes.container}`}>
                  <div style={{ width: "20%" ,minWidth:"100px"}} >
                    <Dropdown control={control} name="countryCode" options={countryCode} defaultValue={true} />
                  </div>
                  <UserInput
                    type="number"
                    placeholder="Mobile Number"
                    name="mobNumber"
                    control={control}
                    fieldClass={true}
                    className={classes.number}
                  />
                </div>
                {errors?.mobNumber && (
                  <Alert className={"p-2 mt-3 ms-4"} style={{ marginRight: "55px" }} variant="danger">
                    {" "}
                    {errors.mobNumber?.message}
                  </Alert>
                )}

                <div className={classes.date}>
                  <p>Date Of Birth</p>
                  <UserInput type="date" name="birthDate" bs-class="my-4" control={control} fieldClass={true} />
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <UserInput type="email" placeholder="Email Address" name="email" bs-class="mt-4" control={control} fieldClass={true} />
                {errors?.email && (
                  <Alert className={"p-2 mt-3 ms-4"} style={{ marginRight: "55px" }} variant="danger">
                    {" "}
                    {errors.email?.message}
                  </Alert>
                )}
                <UserInput type="password" placeholder="Passcode" name="password" bs-class="my-4" control={control} fieldClass={true} />
                {errors?.password && (
                  <Alert className={"p-2 mt-3 ms-4"} style={{ marginRight: "55px" }} variant="danger">
                    {" "}
                    {errors.password?.message}
                  </Alert>
                )}
                <div className={"d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start " + classes.sub}>
                  <UserButton type="submit" bs-class="">
                    Sign Up
                  </UserButton>
                  <Link to="/signin" className={"ms-sm-5 my-3 my-sm-0 " + classes.link}>
                    Already account?
                    {<span className={classes.highlight}>Sign in</span>}
                  </Link>
                </div>
              </Col>
            </Row>
          </Form>
          {/* <SocialLogin /> */}
        </div>
      </div>
      <span className={classes.legal}>Privacy Policy | Team of Use | Licensing Terms</span>
    </div>
  );
};

export default SignUpPage;
