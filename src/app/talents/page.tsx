import React from "react";
import TalentList from "../components/talentList/TalentList";

type Props = {};
import "./talents.scss";
export default function page({}: Props) {
  return (
    <main id="p_tal">
      <TalentList />
    </main>
  );
}
