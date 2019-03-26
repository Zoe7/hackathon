import React, { useState } from "react";
import FieldText from "@atlaskit/field-text";
import Button from "@atlaskit/button";
import Page, { Grid, GridColumn } from "@atlaskit/page";

const Customer = ({ incrementCompletionProgress }) => {
  return (
    <Page>
      {customersData.map(data => {
        return (
          <CustomerRow
            key={data.key}
            data={data}
            id={data.key}
            incrementCompletionProgress={incrementCompletionProgress}
          />
        );
      })}
    </Page>
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

  const handleCreate = () => {
    customersData = customersData.filter(customer => customer.key != id);
    incrementCompletionProgress();
  };

  return (
    <Grid>
      <GridColumn>
        <FieldText
          onChange={setBusinessId}
          onBlur={setBusinessId}
          label="Business Id"
          value={state.BusinessId}
        />
      </GridColumn>
      <GridColumn>
        <FieldText
          onChange={setVatNumber}
          onBlur={setVatNumber}
          label="VAT number"
          value={state.VATNumber}
        />
      </GridColumn>
      <GridColumn>
        <FieldText
          onChange={setIban}
          onBlur={setIban}
          label="IBAN"
          value={state.IBAN}
        />
      </GridColumn>
      <GridColumn>
        <FieldText
          onChange={setEmail}
          onBlur={setEmail}
          label="Email"
          value={state.email}
        />
      </GridColumn>
      <GridColumn>
        <div className="create-button">
          <Button onClick={handleCreate}>Create</Button>
        </div>
      </GridColumn>
    </Grid>
  );
};

let customersData = [
  {
    key: 1,
    BusinessId: null,
    VATnumber: null,
    IBAN: null,
    email: "hello@email.com"
  },
  {
    key: 2,
    BusinessId: 1231546,
    VATnumber: null,
    IBAN: null,
    email: null
  },
  {
    key: 3,
    BusinessId: null,
    VATNumber: 9875331,
    IBAN: null,
    email: null
  },
  {
    key: 4,
    BusinessId: null,
    VATNumber: null,
    IBAN: 56879797,
    email: null
  }
];
