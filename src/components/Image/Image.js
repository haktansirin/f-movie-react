import { useState } from "react";

const Image = ({ src, alt, placeholder, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <img
      src={
        src && isLoaded
          ? `https://image.tmdb.org/t/p/original${src}`
          : placeholder
      }
      alt={alt}
      loading="lazy"
      className={className}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default Image;
