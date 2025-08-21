import { GlobalConfig } from "payload";

const About: GlobalConfig = {
  slug: "about",
  fields: [
    {
      name: "mission",
      required: true,
      type: "richText",
    },
    {
      name: "story",
      required: true,
      type: "richText",
    },
    {
      name: "sal",
      type: "upload",
      label: "Story Art - Left",
      required: true,
      relationTo: "media",
    },

    {
      name: "sar",
      type: "upload",
      label: "Story Art - Right",
      required: true,
      relationTo: "media",
    },
  ],
};

export default About;
