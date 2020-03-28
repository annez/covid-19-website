import React, { useState } from "react"
import { Alert, AlertIcon, AlertTitle, AlertDescription, Input, FormControl, FormLabel, Heading, Button } from "@chakra-ui/core"
import Amplify, { API } from 'aws-amplify';

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import awsconfig from '../aws-exports';
import { Formik, Field, ErrorMessage } from "formik";

Amplify.configure(awsconfig);

const apiName = 'apid510b2bc';
const path = '/volunteer'

const validateRequired = (v) => v ? null : 'Required';

const formControlProps = {
  marginBottom: 5,
  isRequired: true,
}

const TechVolunteersForm = () => {
  const [result, setResult] = useState({});

  const submitForm = (values, actions) => {
    const body = {
      email: values.email,
      fullName: values.fullName,
    }

    API.post(apiName, path, { body }).then(() => {
      actions.setSubmitting(false);
      setResult({
        status: "success",
        title: "Application submitted!",
        description: "Thank you for your interest. We will be in touch soon.",
      })
    }).catch(() => {
      setResult({
        status: "error",
        title: "Submission Failed",
        description: "Sorry, something went wrong. Please try again soon."
      });
    })
  };

  return (
    <Layout>
      <SEO title="Tech Volunteers Form" />

      <Section maxWidth={600}>
        <Heading marginBottom={10} size="lg" textAlign="center">Tech Volunteers Form</Heading>

        {result.status &&
          <Alert
            status={result.status}
            variant="subtle"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="200px"
            marginBottom={10}
          >
            <AlertIcon size="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">{result.title}</AlertTitle>
            <AlertDescription maxWidth="sm">{result.description}</AlertDescription>
          </Alert>}

        {result.status === "success" ||
          <Formik onSubmit={submitForm} initialValues={{ fullName: '', email: '' }}>
            {props => (
              <form onSubmit={props.handleSubmit}>
                <Field name="fullName" validate={validateRequired}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.fullName && form.touched.fullName} {...formControlProps}>
                      <FormLabel htmlFor="full_name">Full Name</FormLabel>
                      <Input {...field} id="full_name"></Input>
                      <ErrorMessage name="fullName"></ErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email" validate={validateRequired}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email} paddingBottom={5} isRequired>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input {...field} id="email" type="email"></Input>
                      <ErrorMessage name="email"></ErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Button
                  variantColor="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                  marginBottom={10}
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        }
      </Section>
    </Layout>
  )
};

export default TechVolunteersForm
