import logoLogin from "../../assets/images/logo-login.png";
import { Card, Grid, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { IAccount } from "../../interface/interface";
import { loginAsync } from "../../app/features/loginSlice";

const LoginAuth = () => {
  const dispatch = useDispatch();

  const initialValues: IAccount = { email: "", password: "" };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter email"),
    password: Yup.string().required("Please enter password"),
  });

  const formik = useFormik<IAccount>({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // type each dispatch as any (not good if you need to use 'abort', etc)
      dispatch(loginAsync(values) as any);
    },
  });

  return (
    <div className="admin_login">
      <Card sx={{ minWidth: 600 }} className="card">
        <Grid container>
          <Grid item xs={6}>
            <img src={logoLogin} alt="logoLogin" style={{ height: "350px" }} />
          </Grid>
          <Grid item xs={6} style={{ padding: "40px" }}>
            <Typography variant="h4" component="div" align="center">
              Welcome back to Login
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              align="center"
            >
              Signin to your Account
            </Typography>
            <form className="form" onSubmit={formik.handleSubmit}>
              <TextField
                label="Email"
                variant="standard"
                fullWidth
                margin="normal"
                id="email"
                name="email"
                className={
                  formik.errors.email && formik.touched.email
                    ? "is-invalid"
                    : ""
                }
                error={!!formik.errors.email && formik.touched.email === true}
                helperText={
                  formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : null
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                fullWidth
                margin="normal"
                name="password"
                className={
                  formik.errors.password && formik.touched.email
                    ? "is-invalid"
                    : ""
                }
                error={
                  !!formik.errors.password && formik.touched.email === true
                }
                helperText={
                  formik.errors.password && formik.touched.password
                    ? formik.errors.password
                    : null
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <Button
                variant="contained"
                type="submit"
                style={{ marginTop: "20px" }}
              >
                Login
              </Button>
            </form>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default LoginAuth;
