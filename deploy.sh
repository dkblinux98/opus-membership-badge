#!/bin/bash

# Set your bucket name here
BUCKET_NAME=opusdigitalbadge

# Build your project (React app)
npm run build

# Deploy to S3
# --acl public-read makes the files publicly readable
# --delete removes files from S3 that are not present in the local folder
aws s3 sync build/ s3://$BUCKET_NAME/ --acl public-read --delete

# Invalidate CloudFront distribution cache
DISTRIBUTION_ID=E2PK2XQ8TLXA80
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "Deployment complete."
