import DisplayWorkImages from './DisplayWorkImages';
import getTrimmingImageUrls from '../lib/getTrimmingImageUrls';

export default async function S3UrlsSection() {
  const trimmingImages = await getTrimmingImageUrls();

  return (
    <section className="s3-urls-section" id="s3-urls">
      <h2>S3 Trimming Images</h2>
      <p className="s3-subtitle">Public URLs from your S3 bucket</p>

      {trimmingImages.length > 0 ? (
        <div className="s3-url-list">
          {trimmingImages.map((url, index) => (
            <a key={`${url}-${index}`} href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          ))}
        </div>
      ) : (
        <p className="s3-empty">No S3 image URLs found.</p>
      )}

      <DisplayWorkImages trimmingImages={trimmingImages} />
    </section>
  );
}
