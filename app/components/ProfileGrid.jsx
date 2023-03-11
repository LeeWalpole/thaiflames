import Image from "next/image";

  export default function ProfileGrid ({images}) {
    return (
        <div className="grid-3">    
        {images.map((image, index) => (
        <figure key={index} className="grid-item grid-item-4x5">
            <Image src={image.gallery_image_url} alt={image.gallery_image_alt} width={image.gallery_image_width} height={image.gallery_image_height} />
          </figure>
             ))}
      </div>
    );
  }