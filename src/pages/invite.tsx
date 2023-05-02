import FetchDiscordData from "@/components/FetchDiscord";

export const getStaticProps = async () => {
  const discordData = await FetchDiscordData();

  if (discordData.instant_invite) {
    return {
      redirect: {
        destination: discordData.instant_invite,
        permanent: false,
      },
    };
  }

  return {
    notFound: true,
  };
};

const Invite = () => {
  return <></>;
};

export default Invite;
