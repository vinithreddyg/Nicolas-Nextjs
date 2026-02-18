import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

export default async function getTrimmingImageUrls() {
  const bucket = process.env.AWS_BUCKET_NAME || process.env.AWS_S3_BUCKET_NAME;
  const prefix = process.env.S3_TRIMMING_PREFIX || 'Trimming/';
  const referenceKey = process.env.S3_TRIMMING_REFERENCE_KEY || 'Trimming/tr1.jpeg';
  const region =
    process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || process.env.AWS_S3_REGION || 'us-east-2';

  const accessKeyId = process.env.AWS_ACCESS_KEY_ID || process.env.AWS_S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || process.env.AWS_S3_SECRET_ACCESS_KEY;

  if (!bucket || !accessKeyId || !secretAccessKey) {
    return [];
  }

  const client = new S3Client({
    region,
    credentials: { accessKeyId, secretAccessKey },
  });

  try {
    const response = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: prefix,
      }),
    );

    const listedKeys = (response.Contents || [])
      .map((item) => item.Key)
      .filter(Boolean)
      .filter((key) => IMAGE_EXTENSIONS.some((ext) => key.toLowerCase().endsWith(ext)));

    const keys = Array.from(
      new Set([
        ...listedKeys,
        ...(IMAGE_EXTENSIONS.some((ext) => referenceKey.toLowerCase().endsWith(ext)) ? [referenceKey] : []),
      ]),
    ).sort();

    const signedUrls = await Promise.all(
      keys.map((key) =>
        getSignedUrl(
          client,
          new GetObjectCommand({
            Bucket: bucket,
            Key: key,
          }),
          { expiresIn: 60 * 60 },
        ),
      ),
    );

    return signedUrls;
  } catch {
    return [];
  }
}
