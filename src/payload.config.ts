// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
import { s3Storage } from "@payloadcms/storage-s3";
import Home from "./collections/global/Home";
import staff from "./collections/Staff";
import Talents from "./collections/Talents";
import Audition from "./collections/global/Audition";
import News from "./collections/News";
import Guidelines from "./collections/global/Guidelines";
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Talents, staff, News],
  globals: [Home, Audition, Guidelines],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    s3Storage({
      bucket: "heart-sync",
      collections: {
        media: true,
      },
      clientUploads: true,

      config: {
        endpoint: process.env.MINIO_URI ?? "",
        credentials: {
          accessKeyId: process.env.MINIO_AK ?? "",
          secretAccessKey: process.env.MINIO_SK ?? "",
        },
        forcePathStyle: true,
        region: "us-east-1",
      },
    }),
  ],
});
