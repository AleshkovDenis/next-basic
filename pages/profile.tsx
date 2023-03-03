import { FC } from "react";
import Head from "next/head";
import Socials from "@/components/Socials";
import { SocialsList } from "@/types";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/api/socials`);
  const socials = await response.json();

  if (!socials) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials },
  };
};

type Props = {
  socials: SocialsList;
};

const Profile: FC<Props> = ({ socials }) => {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <Head>
        <title>Profile</title>
      </Head>
      <Socials socials={socials} />
    </div>
  );
};

export default Profile;
