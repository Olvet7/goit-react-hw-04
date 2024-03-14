import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { TbPhotoSearch } from "react-icons/tb";
import * as Yup from "yup";

import css from "./SearchBar.module.css"

export default function SearchBar({ onSubmit }) {

  const notify = () => toast.error("Enter your search param, please");

  const initialValues = {query: ""};

  const validationSchema = Yup.object().shape({
    query: Yup.string().min(1, "Too short query!").required(notify),
  })

  const handleSubmit = (values, actions) => {
    actions.resetForm();

    if (values.query.trim() === "") {
      notify();
      return;
    } 

    onSubmit(values.query.toLowerCase());
  };

  return (
    <header>
      <Toaster position="top-right" />
      <Formik 
      onSubmit={handleSubmit} 
      initialValues={initialValues}  
      validationSchema={validationSchema}> 
        <Form className={css.form}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.btn}><TbPhotoSearch /></button>
        </Form>
      </Formik>
    </header>
  );
}
