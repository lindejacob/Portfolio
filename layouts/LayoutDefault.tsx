import "./style.css";

import React from "react";
import logoUrl from "../assets/logo.svg";
import { Navbar } from "../components/Navbar/Navbar";

export default function LayoutDefault({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         <Navbar />
         {children}
      </>
   );
}
