import Image from 'next/image';

const fallbackImages = [
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=800&q=80',
];

export default function DisplayWorkImages({ images = [] }) {
  const imageList = Array.isArray(images) && images.length > 0 ? images : fallbackImages;

  return (
    <section className="gallery-wrapper">
      <div className="gallery">
        {imageList.map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={src}
            alt={`Work image ${index + 1}`}
            width={800}
            height={600}
          />
        ))}
      </div>
    </section>
  );
}
