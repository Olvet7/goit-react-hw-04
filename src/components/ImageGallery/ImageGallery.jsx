import css from "../../components/ImageGallery/ImageGallery.module.css"
import ImageCard from "./ImageCard/ImageCard";

export default function ImageGallery ({ results, openModal }) {
  return (
    <ul className={css.list}>
      {results.map((result) => (
        <li key={result.id}>
        <ImageCard result={result} onClick={() => openModal(result)}/>
        </li>
      ))}
    </ul>
  );
}




// Приклад КОЛЕКЦІЇ від Репети
// https://stackblitz.com/edit/vitejs-vite-7euaws?file=src%2Fcomponents%2FTask%2FTask.jsx&file=src%2Fcomponents%2FApp%2FApp.jsx,src%2Fcomponents%2FTaskList%2FTaskList.jsx