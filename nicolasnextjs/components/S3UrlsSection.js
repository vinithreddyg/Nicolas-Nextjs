import DisplayWorkImages from './DisplayWorkImages';
import getTrimmingImageUrls from '../lib/getTrimmingImageUrls';

export default async function S3UrlsSection() {
  const trimmingImages = await getTrimmingImageUrls();

  return (
    <section className="s3-urls-section" id="s3-urls">
      <h2>S3 Trimming Images</h2>
      <DisplayWorkImages trimmingImages={trimmingImages} />
    </section>
  );
}
