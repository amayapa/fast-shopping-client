import React from "react";
import PropTypes from "prop-types";
import {
  Blank,
  Form,
  FormRow,
  FormTitle,
  FormWrapper,
  Input,
  Label,
  TextArea,
} from "../styles/customerForm";

const CustomerForm = (props) => {
  const { formRows, handleChange, mode, border } = props;
  return (
    <FormWrapper>
      <Form mode={mode} border={border}>
        <FormTitle>Customer Information</FormTitle>
        {Object.entries(formRows).map(([key, content], index) => {
          const { label, type, value, required, name } = content;
          return type === "textarea" ? (
            <FormRow key={index}>
              <Label htmlFor={name}>
                {label}
                {required && "*"}
              </Label>
              <TextArea
                required={required}
                mode={mode}
                border={border}
                rows="3"
                onChange={(event) => handleChange(event)}
              />
            </FormRow>
          ) : (
            <FormRow key={index}>
              <Label>
                {label}
                {required && "*"}
              </Label>
              <Input
                name={name}
                required={required}
                id={name}
                mode={mode}
                border={border}
                value={value}
                type={type}
                onChange={(event) => handleChange(event)}
              />
            </FormRow>
          );
        })}
      </Form>
      <Blank></Blank>
    </FormWrapper>
  );
};
CustomerForm.propTypes = {
  props: PropTypes.shape({
    formRows: PropTypes.func,
    handleChange: PropTypes.func,
  }),
};

export default CustomerForm;
