import css from "./ImageCard.module.css"

export default function ImageCard ({
  alt_description,
  url: { small, regular },
  openModal,
  onTarget
}) {

  const target = () => {
    onTarget({
      img: regular,
      alt_description: alt_description,
    });
    openModal();
  }
  return (
    <div className={css.item}>
      <img src={small} alt={alt_description} className={css.image} onClick={target}/>
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