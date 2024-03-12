import toast from "react-hot-toast"

export default function ErrorMessage () {
  const error = () => {
    toast.error("❌ Pleace reload page");
  };

  return error();
}
