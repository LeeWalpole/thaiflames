"use client";
import { useState } from "react";

const Form = ({
  inputs,
  buttonText,
  smallPrint,
  formTitle,
  formDesc,
  formSuccessTitle,
  formSuccessDesc,
}) => {
  const [formValues, setFormValues] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitFailed, setFormSubmitFailed] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = document.querySelectorAll(".required");
    let valid = true;

    // Check if all required fields are filled
    requiredFields.forEach((field) => {
      if (!field.value) {
        field.parentElement.classList.add("input-value-no");
        valid = false;
      } else {
        const classes = field.parentElement.classList;
        if (classes.contains("input-value-no")) {
          field.parentElement.classList.remove("input-value-no");
        }
      }
    });

    // If all required fields are filled, submit the form
    if (valid) {
      setFormSubmitting(true);
      try {
        const scriptURL =
          "https://script.google.com/macros/s/AKfycbw80A7u3FLFoid0mkPQFDinakY7SeoQ63ZmeU0n7menWChjClUub1cddKK-VbcBY0qR/exec";
        const response = await fetch(scriptURL, {
          method: "POST",
          body: new FormData(e.target),
        });
        if (response.ok) {
          setFormSubmitted(true);
        } else {
          setFormSubmitFailed(true);
        }
      } catch (error) {
        console.error(error);
        setFormSubmitFailed(true);
      } finally {
        setFormSubmitting(false);
      }
    }
  };

  const renderInput = (input, index) => {
    if (input.type === "textarea") {
      return (
        <textarea
          key={index}
          placeholder={input.placeholder}
          className={input.required ? "required" : ""}
          name={input.name}
          value={formValues[input.name] || ""}
          onChange={handleInputChange}
        />
      );
    } else if (input.type === "radio") {
      return (
        <div key={index} className="radio-buttons">
          {input.options.map((option, optionIndex) => (
            <label key={optionIndex}>
              <input
                type="radio"
                className={input.required ? "required" : ""}
                name={input.name}
                value={option.value}
                onChange={handleInputChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      );
    } else if (input.type === "select") {
      return (
        <select
          key={index}
          placeholder={input.placeholder}
          className={input.required ? "required" : ""}
          name={input.name}
          value={formValues[input.name] || ""}
          onChange={handleInputChange}
        >
          {input.options.map((option, optionIndex) => (
            <option key={optionIndex} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          key={index}
          type={input.type}
          placeholder={input.placeholder}
          className={input.required ? "required" : ""}
          name={input.name}
          value={formValues[input.name] || ""}
          onChange={handleInputChange}
        />
      );
    }
  };

  return (
    <section className="popup-small">
      {formSubmitted ? (
        <aside>
          <h5>{formSuccessTitle}</h5>
          <p>{formSuccessDesc}</p>
          <button className="button button-next submit_disabled" type="submit">
            Close
          </button>
        </aside>
      ) : (
        <aside>
          <h5>{formTitle}</h5>
          <p>{formDesc}</p>
          <form onSubmit={handleFormSubmit}>
            {inputs.map((input, index) => (
              <div key={index} className="form-input">
                {renderInput(input, index)}
              </div>
            ))}
            <button
              className="button button-next submit_disabled"
              type="submit"
              id="submit"
              disabled={formSubmitting}
            >
              {formSubmitting ? "Sending..." : buttonText}
            </button>

            <small className="smallPrint">{smallPrint}</small>

            {formSubmitFailed && (
              <div className="form-submitted form-submitted-failed nay">
                Failed to submit the form. Please try again later.
              </div>
            )}
          </form>
        </aside>
      )}
    </section>
  );
};

export default Form;
