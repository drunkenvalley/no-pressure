import DiscordResponse from "@/interfaces/DiscordData";

export const getData = async () => {
  const discordId = process.env.NEXT_PUBLIC_DISCORD_WIDGET_ID as string;
  const response = await fetch(
    `https://discordapp.com/api/servers/${discordId}/widget.json`
  );
  const data: DiscordResponse = await response.json();
  return data;
};

export default getData;
