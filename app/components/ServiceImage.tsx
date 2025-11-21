'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ServiceImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export default function ServiceImage({ 
  src, 
  alt, 
  className = '',
  fallbackSrc = '/placeholder-service.jpg',
  ...props 
}: ServiceImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        console.error(`Erreur de chargement de l'image: ${src}`);
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
