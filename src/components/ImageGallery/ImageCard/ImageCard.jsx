export function ImageCard({result: {urls: {small}}, description}) {
  return (
    <div>
      <img src={small} alt={description} />
    </div>
  );
}
