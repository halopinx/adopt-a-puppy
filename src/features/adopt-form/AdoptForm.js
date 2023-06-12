import { Formik, Form } from 'formik';
import Button from '../../components/ui/Button';
import FormikInput from '../../components/ui/form/FormikInput';
import { AdoptFormSchema } from './schema';
import classes from './AdoptForm.module.scss'


const AdoptForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }

    const onSubmit = async (_, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        actions.resetForm();
    }

    return ( 
        <Formik
         initialValues={initialValues}
         validationSchema={AdoptFormSchema}
         onSubmit={onSubmit}
       >
        {({ isSubmitting }) => (
          <Form>
            <div className={classes.fields}>
                <small>All fields are required*</small>
                <FormikInput label='Firstname*' id='firstname' type='text' name='firstName' />
                <FormikInput label='Lastname*' id='lastname' type='text' name='lastName' />
                <FormikInput label='Email Address*' id='email' type='email' name='email' />
                <FormikInput label='Phone Number*' id='phone' type='tel' name='phone' />
                <Button variant='button' type="submit" disabled={isSubmitting} className={classes.btn}>{isSubmitting ? 'Submitting...' : 'Ready to adopt'}</Button>
            </div>
          </Form>
        )}
      </Formik>
    );
}

 
export default AdoptForm;