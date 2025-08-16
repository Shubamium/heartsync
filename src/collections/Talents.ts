import { CollectionConfig } from "payload";

const Talents: CollectionConfig = {
  slug: "talent",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "color",
      admin: {
        description: "Hex Color, ex: #000000",
      },
      type: "text",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      type: "text",
      required: true,
    },
    {
      name: "yt",
      type: "group",
      label: "Youtube Link",
      fields: [
        {
          name: "url",
          type: "text",
          required: true,
        },
        {
          name: "handle",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "x",
      type: "group",
      label: "X Link",
      fields: [
        {
          name: "url",
          type: "text",
          required: true,
        },
        {
          name: "handle",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "il",
      label: "Info List",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "list",
      type: "upload",
      label: "List Art",
      relationTo: "media",
      required: true,
    },
    {
      name: "pfp",
      type: "upload",
      label: "Small Profile Pic",
      relationTo: "media",
      required: true,
    },
    {
      name: "main",
      label: "Main Art",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "sidet",
      label: "Side Art (Top)",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "sidet",
      label: "Side Art (Bottom)",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "voiceline",
      type: "group",
      fields: [
        {
          name: "audio",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "voiceline",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
export default Talents;
