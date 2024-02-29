import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";

const notify = () => toast.error("Enter your search param, please");

function SearchBar({ onSubmit }) {
  const initialValues = {
    search: "",
  };

  const handleSubmit = (values) => {
    if (!values.search) {
      notify();
      return;
    }

    console.log(values);
    onSubmit(values.search);
  };

  return (
    <header>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;
