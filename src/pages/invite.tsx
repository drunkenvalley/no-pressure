import FetchDiscordData from "@/components/FetchDiscord";

const envInviteLink = process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK as string;

export const getServerSideProps = async () => {
  const discordData = await FetchDiscordData();

  const instant_invite = discordData.instant_invite || envInviteLink;

  if (instant_invite) {
    return {
      redirect: {
        destination: instant_invite,
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
