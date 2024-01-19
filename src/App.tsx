import Form from '@rjsf/mui';
import React, { useEffect } from 'react';
import { schema } from './schema';
import { customizeValidator } from '@rjsf/validator-ajv8';
import Ajv2020 from 'ajv/dist/2020';

const initialData = {
  "DataSource":"chalgrove-cartularies",
  "Surname":"Albus",
  "FirstName":"William",
  "Location":"Abingdon't",
  "Date":1220
};

export const App = () => {
  useEffect(() => console.info({ schema }), []);
  return (
    <Form schema={schema} validator={customizeValidator({
      AjvClass: Ajv2020
    })} formData={initialData}></Form>
  );
}
