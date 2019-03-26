import React, { useState } from "react";
import FieldText from "@atlaskit/field-text";
import Button from "@atlaskit/button";

const Customer = ({ incrementCompletionProgress }) => {
  return (
    <>
      {customersData.map((data, id) => {
        return (
          <CustomerRow
            key={id}
            data={data}
            id={id}
            incrementCompletionProgress={incrementCompletionProgress}
          />
        );
      })}
    </>
  );
};
export default Customer;

const CustomerRow = ({ data, id, incrementCompletionProgress }) => {
  const [state, setState] = useState(data);

  const setBusinessId = event => {
    setState({ ...state, BusinessId: event.target.value });
  };
  const setVatNumber = event => {
    setState({ ...state, VATNumber: event.target.value });
  };
  const setEmail = event => {
    setState({ ...state, email: event.target.value });
  };
  const setIban = event => {
    setState({ ...state, IBAN: event.target.value });
  };

  return (
    <div>
      <FieldText
        onChange={setBusinessId}
        onBlur={setBusinessId}
        label="Business Id"
        value={state.BusinessId}
      />
      <FieldText
        onChange={setVatNumber}
        onBlur={setVatNumber}
        label="VAT number"
        value={state.VATNumber}
      />
      <FieldText
        onChange={setIban}
        onBlur={setIban}
        label="IBAN"
        value={state.IBAN}
      />
      <FieldText
        onChange={setEmail}
        onBlur={setEmail}
        label="Email"
        value={state.email}
      />
      <Button onClick={incrementCompletionProgress}>Create</Button>
    </div>
  );
};

const customersData = [
  {
    BusinessId: null,
    VATnumber: null,
    IBAN: null,
    email: "hello@email.com"
  },
  {
    BusinessId: 1231546,
    VATnumber: null,
    IBAN: null,
    email: null
  },
  {
    BusinessId: null,
    VATNumber: 9875331,
    IBAN: null,
    email: null
  },
  {
    BusinessId: null,
    VATNumber: null,
    IBAN: 56879797,
    email: null
  }
];
