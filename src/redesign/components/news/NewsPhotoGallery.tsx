interface NewsPhotoGalleryProps {
  photos: readonly { src: string; alt: string }[];
  className: string;
  imageClassName: string;
}

export default function NewsPhotoGallery({ photos, className, imageClassName }: NewsPhotoGalleryProps) {
  return (
    <div className={className}>
      {photos.map(photo => (
        <div key={photo.src} className={imageClassName}>
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
