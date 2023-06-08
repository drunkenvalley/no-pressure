import { DiscordUser } from "@/interfaces/DiscordData";
import Image from "next/image";

export const User = ({ avatar_url, game, username }: Props): JSX.Element => {
  return (
    <div className="flex flex-row justify-start gap-2 text-xs">
      <Image
        alt=""
        className="rounded-full"
        height={16}
        src={avatar_url}
        unoptimized
        width={16}
      />
      <span className="grow text-left">{username}</span>
      {game && <span className="text-light opacity-50">{game.name}</span>}
    </div>
  );
};

interface Props
  extends Omit<React.HTMLProps<HTMLDivElement>, "id">,
    DiscordUser {}

export default User;
