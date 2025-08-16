import { CollectionConfig } from "payload";

const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      admin: {
        description: "Identifier, no space allowed, example: article-name",
      },
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "banner",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "article",
      type: "richText",
      required: true,
    },
  ],
};

export default News;
