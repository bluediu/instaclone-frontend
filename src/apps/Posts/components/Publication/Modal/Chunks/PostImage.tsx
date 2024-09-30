interface IProps {
  image: string;
  toggleSize: boolean;
}

export const PostImage = ({ image, toggleSize }: IProps) => {
  return (
    <>
      {/* Image without filter */}
      <img
        src={image}
        loading="eager"
        className="post-image"
        style={{
          objectFit: toggleSize ? 'cover' : 'contain',
        }}
      />

      {/* Imagen with filter */}
      <div
        className="post-image-blur"
        style={{ backgroundImage: `url(${image})` }}
      />
    </>
  );
};
