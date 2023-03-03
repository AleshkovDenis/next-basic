import Head from "next/head";

type Props = {
  socials: Array<{ id: number; icon: string; path: string }> | null;
};

export default function Socials({ socials }: Props) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"
        />
      </Head>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            My Links
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {socials &&
              socials &&
              socials.map(({ id, icon, path }) => (
                <a key={id} target="_blank" href={path}>
                  <i className={`fab fa-${icon} sz`} aria-hidden="true" />
                  {icon}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
