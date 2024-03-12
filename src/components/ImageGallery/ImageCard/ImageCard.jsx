import css from "./ImageCard.module.css"

export default function ImageCard ({result: {urls: {small}, description}}) {
  return (
    <div className={css.item}>
      <img src={small} alt={description} className={css.image}/>
    </div>
  );
}


// const ImageCard = ({alt_description, url: { small, regular }, onModalOpen, onTarget }) => {
//   const target = () => {
//     onTarget({
//       img: regular,
//       alt_description,
//     });
//     onModalOpen();
//   };
//   return (
//     <>
//       <img src={small} alt={alt_description} onClick={target} />
//     </>
//   );
// };