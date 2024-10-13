import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Required field'),
  number: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Required field'),
});

const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact({
          id: nanoid(),
          ...values,
        });
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <div>
          <Field
            name="name"
            type="text"
            placeholder="Name"
            className={styles.input}
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div>
          <Field
            name="number"
            type="tel"
            placeholder="Phone number"
            className={styles.input}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
