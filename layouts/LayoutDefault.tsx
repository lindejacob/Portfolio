import "./style.css";

import React from "react";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link.js";

export default function LayoutDefault({
   children,
}: {
   children: React.ReactNode;
}) {
   return <>{children}</>;
}
