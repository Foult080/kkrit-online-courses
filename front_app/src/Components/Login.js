import React from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container">
      <div className="text-center">
        <h1>Войти</h1>
        <hr />
      </div>
      <form style={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Введите Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          required
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Введите пароль</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div className="text-center mt-2">
          <Button variant="primary" size="lg" type="submit">
            Продолжить
          </Button>
          <p className="mb-3 mt-2 text-muted">
            Нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
          </p>
          <p className="mt-4 mb-3 text-muted">
            &copy; KKRIT-Online-Courses 2021
          </p>
        </div>
      </form>
    </div>
  );
};

const styles = {
  form: {
    width: "100%",
    maxWidth: "330px",
    position: "relative",
    boxSizing: "border-box",
    height: "auto",
    padding: "10px",
    fontSize: "16px",
    margin: "auto",
  },
};

export default Login;
