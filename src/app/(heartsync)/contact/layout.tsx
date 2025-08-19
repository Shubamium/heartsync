import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export const metadata: Metadata = {
  title: "Contact | HeartSync",
};
export default function layout({ children }: Props) {
  return <>{children}</>;
}
