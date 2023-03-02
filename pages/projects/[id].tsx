import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://my-json-server.typicode.com/AleshkovDenis/local-db/projects`
  );
  const projects = await response.json();

  const paths = projects.map(({ id }: { id: string }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const response = await fetch(
    `https://my-json-server.typicode.com/AleshkovDenis/local-db/projects/${params.id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

type ProjectDetailsProps = {
  data: {
    id: number;
    title: string;
  };
};

export default function ProjectDetails({ data }: ProjectDetailsProps) {
  return (
    <div>
      <Head>
        <title>Project Details</title>
      </Head>
      <h1>{data.id}</h1>
      <h1>{data.title}</h1>
    </div>
  );
}
