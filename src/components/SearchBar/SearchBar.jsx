import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { TbPhotoSearch } from "react-icons/tb";
import * as Yup from "yup";

import css from "./SearchBar.module.css"

export default function SearchBar({ onSubmit }) {

  const notify = () => toast.error("Enter your search param, please");

  const initialValues = {search: ""};

  const validationSchema = Yup.object().shape({
    search: Yup.string().min(2, "Too short query!").required(notify),
  })

  const handleSubmit = (values, actions) => {
    actions.resetForm();

    if (values.search.trim() === "") {
      notify();
      return;
    }

    console.log(values);
    console.log("WOW");
    onSubmit(values.search.toLowerCase());
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
            name="search"
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

// import { TbPhotoSearch } from "react-icons/tb";
{/* <TbPhotoSearch /> */}