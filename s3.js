const aws = require("aws-sdk");

const region = "ap-south-1";
const bucketName = "guess-anime";
const accessKeyId = "AKIA3ZOU53KCIYCFEK6L";
const secretAccessKey = "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";

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

exports.generateUploadURL = async () => {
  const imageName = JSON.stringify(Date.now() + Math.random());

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
};
