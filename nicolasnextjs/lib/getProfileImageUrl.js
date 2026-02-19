import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const encodeS3Key = (key) => key.split('/').map(encodeURIComponent).join('/');

export default async function getProfileImageUrl() {
  const bucket = process.env.AWS_BUCKET_NAME || process.env.AWS_S3_BUCKET_NAME;
  const prefix = process.env.S3_PROFILE_PREFIX || 'Profile Images/';
  const referenceKey = process.env.S3_PROFILE_REFERENCE_KEY || 'Profile Images/profile1.jpeg';
  const region =
    process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || process.env.AWS_S3_REGION || 'us-east-2';

  const accessKeyId = process.env.AWS_ACCESS_KEY_ID || process.env.AWS_S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || process.env.AWS_S3_SECRET_ACCESS_KEY;

  if (!bucket || !accessKeyId || !secretAccessKey) {
    return '';
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

    if (keys.length === 0) {
      return '';
    }

    const selectedKey = keys[0];
    return `https://${bucket}.s3.${region}.amazonaws.com/${encodeS3Key(selectedKey)}`;
  } catch {
    return '';
  }
}
