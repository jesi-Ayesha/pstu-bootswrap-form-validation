import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const StylishForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Stylish Bootstrap Form</h2>
      <form
        className={`row g-4 needs-validation shadow-lg p-4 rounded-3 bg-light`}
        noValidate
        validated={validated.toString()}
        onSubmit={handleSubmit}
      >
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label fw-bold">First Name</label>
          <input
            type="text"
            className={`form-control border-primary ${validated && !formData.firstName ? "is-invalid" : ""}`}
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid first name.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label fw-bold">Last Name</label>
          <input
            type="text"
            className={`form-control border-primary ${validated && !formData.lastName ? "is-invalid" : ""}`}
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid last name.</div>
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label fw-bold">Email</label>
          <input
            type="email"
            className={`form-control border-primary ${validated && !formData.email ? "is-invalid" : ""}`}
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid email.</div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-primary px-5 py-2 fw-bold shadow" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StylishForm;
