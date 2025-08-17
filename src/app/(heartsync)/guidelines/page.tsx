import React from "react";

type Props = {};
import "./guidelines.scss";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
export default async function page({}: Props) {
  const config = await payloadConfig;
  const p = await getPayload({ config });
  const g = await p.findGlobal({ slug: "guidelines" });

  return (
    <main id="p_guide">
      <div className="panel">
        <div className="l">
          <div className="ph">
            <h2 className="sh">HEARTSYNC</h2>
            <h2 className="mh">GUIDELINES</h2>
          </div>
        </div>
        <div className="r">
          <RichText data={g.guideline as SerializedEditorState} />
          {/* <h1 className="title">Secondary Creation Guidelines</h1>
          <p>
            HeartSync LLC (hereinafter referred to as "the Company") has
            established the following guidelines to ensure that more people can
            safely enjoy the content we provide, such as characters, still
            images, videos, designs, etc. (hereinafter referred to as "Company
            Content") and to contribute to the development of the industry as a
            whole. We ask that you conduct your secondary creative activities
            with respect toward the Company, our creators, distributors, and
            fans, while adhering to these guidelines. If you comply with these
            guidelines, you do not need to contact us regarding your secondary
            creations.
          </p>
          <h2>What is Secondary Creation?</h2>
          <p>
            "Secondary creation" refers to works created using Company Content
            that incorporate original ideas and creativity. If your work
            complies with these guidelines, we will not exercise our rights over
            it in principle.
          </p>
          <p>
            However, works that use Company Content without any substantial
            change or that lack creative originality (e.g., simple
            modifications) do not qualify as secondary creations and are not
            covered by these guidelines.
          </p>

          <h2>Usage Restrictions</h2>
          <p>
            Please enjoy secondary creations within the scope of hobby-based or
            fan activities. The following uses are prohibited:
          </p>
          <ul>
            <li>
              Expressions that significantly damage the image of affiliated
              talents or third parties
            </li>
            <li>
              Content that undermines the trust, dignity, honor, or rights of
              talents or others
            </li>
            <li>Inappropriate or malicious alterations</li>
            <li>Content against public order or morals</li>
            <li>
              Violations of laws or expressions that encourage illegal behavior
            </li>
            <li>
              Discriminatory content based on race, nationality, gender,
              religion, etc.
            </li>
            <li>Excessively violent or cruel expressions</li>
            <li>
              Misleading representations that make secondary creations appear
              official
            </li>
            <li>HeartSync 17</li>
            <li>Any other content the Company deems inappropriate</li>
          </ul> */}
        </div>
      </div>
    </main>
  );
}
