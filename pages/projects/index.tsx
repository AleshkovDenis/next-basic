import Head from "next/head";
import ProjectsList from "@/components/ProjectsList";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/AleshkovDenis/local-db/projects"
  );
  const projects = await response.json();

  if(!projects) {
    return {
      notFound: true,
    }
  }

  return {
    props: { projects },
  };
};

type Project = {
  id: number;
  title: string;
};

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <Head>
        <title>Projects</title>
      </Head>
      <ProjectsList data={projects} />
    </div>
  );
};
export default Projects;
