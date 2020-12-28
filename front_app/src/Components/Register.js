import React from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container">
      <div className="text-center">
        <h1>Зарегистрироваться</h1>
        <hr />
      </div>
      <form style={styles.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="Name">Укажите ваше имя</label>
        <input
          id="Name"
          name="name"
          type="text"
          className="form-control"
          autoFocus
          required
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Укажите Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          required
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Введите пароль</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor="password2">Повторите пароль</label>
        <input
          id="password2"
          name="password2"
          type="password"
          required
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.password2}
        />
        <div className="text-center mt-2">
          <Button variant="primary" size="lg" type="submit">
            Продолжить
          </Button>
          <small className="form-text">
            Нажимая на кнопку вы даёте согласие, на обработку персональных
            данных и соглашаетесь с{" "}
            <a href="/privacy">политикой конфиденциальности</a>
          </small>
          <p className="mb-3 mt-2 text-muted">
            Уже есть аккаунт? <Link to="/login">Войдите</Link>
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

export default Register;
