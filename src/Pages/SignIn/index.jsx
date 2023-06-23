import { Alert, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PublicCard from "../../Components/Cards/PublicCard";
import SocialLogin from "../../Components/common/SocialLogin";
import UserButton from "../../Components/common/UserButton/UserButton";
import UserInput from "../../Components/common/UserInput/UserInput";
import classes from "./index.module.css";

import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";

const schema = Joi.object({
  email: Joi.string().min(4).message("6").required(),
  password: Joi.string().min(4).message("4").required(),
});

const SignInPage = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await axios.post("/users/login", data);
    if (res.status === 200 || res.data?.token) {
      localStorage.setItem("token" , res.data.token)
     return navigate("/");
    }
  };

  return (
    <div className={"container-fluid " + classes.bg}>
      <div className={classes.cardcontainer}>
        <PublicCard>
          <div className={classes.title}>Sign in</div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <UserInput type="email" placeholder="Email Address" name="email" bs-class="mt-4" control={control} fieldClass={true}/>
            {errors?.email && (
              <Alert className={"p-2 mt-3 ms-4"} style={{ marginRight: "55px" }} variant="danger">
                {" "}
                {errors.email?.message}
              </Alert>
            )}
            <UserInput type="password" placeholder="Passcode" name="password" bs-class="my-4" control={control} fieldClass={true}/>
            {errors?.password && (
              <Alert className={"p-2 mt-3 ms-4"} style={{ marginRight: "55px" }} variant="danger">
                {" "}
                {errors.password?.message}
              </Alert>
            )}
            <div className={"d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start " + classes.sub}>
              <UserButton type="submit" bs-class="">
                Sign In
              </UserButton>
              <Link to="/signup" className={"ms-sm-5 my-3 my-sm-0 " + classes.link}>
                Create an Account
              </Link>
            </div>
          </Form>
          <SocialLogin />
        </PublicCard>
      </div>
      <span className={classes.legal}>Privacy Policy | Team of Use | Licensing Terms</span>
    </div>
  );
};

export default SignInPage;
