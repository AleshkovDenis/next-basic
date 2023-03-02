import Head from "next/head";
import NotFound from "@/components/NotFound";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <NotFound />
    </>
  );
};
export default NotFoundPage;
