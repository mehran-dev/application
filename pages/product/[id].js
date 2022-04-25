import React from "react";
import { useRouter } from "next/router";

export default function Id() {
  const router = useRouter();
  //console.log(router);
  //console.log(router.pathname);

  return <div>{router.query.id}</div>;
}
