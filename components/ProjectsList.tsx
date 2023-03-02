import { useEffect, useState } from "react";
import Project from "./Project";

type Props = {
  data: { id: number; title: string }[];
};

export default function Example({ data }: Props) {
  return (
    <div>
      {data && data.map(({ title,id }) => <Project id={id} key={id} title={title} />)}
    </div>
  );
}
