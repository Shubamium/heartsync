import React from "react";
import TalentList from "../components/talentList/TalentList";

type Props = {};
import "./talents.scss";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
export default async function page({}: Props) {
  const config = await payloadConfig;
  const p = await getPayload({ config });

  const talent = await p.find({
    collection: "talent",
  });
  return (
    <main id="p_tal">
      <TalentList tl={talent.docs} />
    </main>
  );
}
