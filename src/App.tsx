import Form from '@rjsf/mui';
import React, { useEffect } from 'react';
import { schema } from './schema';
import validator from '@rjsf/validator-ajv8';

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
    <Form schema={schema} validator={validator} formData={initialData}></Form>
  );
}
