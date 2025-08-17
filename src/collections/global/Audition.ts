import { GlobalConfig } from "payload";

const Audition: GlobalConfig = {
  slug: "audition",
  fields: [
    {
      type: "checkbox",
      name: "status",
      label: "Is Audition Open",
    },
    {
      name: "status-text",
      label: "Status Text",
      type: "text",
    },
    {
      name: "faq",
      type: "array",
      fields: [
        {
          name: "question",
          type: "text",
        },
        {
          name: "answer",
          type: "text",
        },
      ],
      label: "FAQ",
    },
  ],
};
export default Audition;
