import Form from '@rjsf/mui';
import React, { useEffect } from 'react';
import { schema } from './schema';
import { customizeValidator } from '@rjsf/validator-ajv8';

export const App = () => {
  useEffect(() => console.info({ schema }), []);
  return (
    <>
      <Form schema={schema} validator={customizeValidator({
        ajvOptionsOverrides: {
          allErrors: true,
          loopEnum: 1,
          inlineRefs: false
        }
      })}></Form>
    </>
  )
}
