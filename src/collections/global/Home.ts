import { GlobalConfig } from "payload";

const Home: GlobalConfig = {
  slug: "Home",
  fields: [
    {
      name: "video",
      type: "upload",
      required: true,
      admin: {
        description: "Recommended Webm Format and smaller video size",
      },
      relationTo: "media",
    },
    {
      name: "corner",
      label: "Corner Image Carousel",

      type: "array",
      required: true,
      fields: [
        {
          type: "upload",
          relationTo: "media",
          name: "image",
          required: true,
        },
        {
          name: "url",
          type: "text",
        },
      ],
    },
    {
      name: "ha",
      label: "Hero Art",
      type: "upload",
      relationTo: "media",
    },
  ],
};
export default Home;
