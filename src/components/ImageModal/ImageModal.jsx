import css from "./ImageModal.module.css";

export default function ImageModal ({onModalClose, img}) {
    return (
        <div className={css.wrapper}>
        <img 
        className={css.img}        
        src={img.img} 
        alt={img.alt_description} 
        onClick={onModalClose} />
        <p className={css.description}>{img.alt_description}</p>
        </div>
    )
}
