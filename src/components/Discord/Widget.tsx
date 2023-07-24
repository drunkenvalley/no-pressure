import DiscordResponse from "@/interfaces/DiscordData";
import Link from "../Link";
import User from "./User";
import { useState } from "react";

interface Props extends Omit<React.HTMLProps<HTMLDivElement>, "value"> {
  value: DiscordResponse;
}

export const Widget = ({ value }: Props) => {
  const [memberOverflow, setMemberOverflow] = useState(false);
  const { members, presence_count } = value;
  return (
    <section className="py-4 bg-dark rounded-md flex flex-col justify-start text-light h-full min-h-[500px]">
      <h2 className="text-2xl text-gold font-bold px-6 py-4">
        {presence_count} members online!
      </h2>
      <div className="flex grow h-px relative">
        <div
          className={`w-full grow flex flex-col gap-1 px-6 overflow-x-hidden overflow-y-auto ${
            memberOverflow ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {members && members.map((item) => <User key={item.id} {...item} />)}
        </div>
        {!memberOverflow && (
          <div className="absolute text-gold bottom-0 right-0 w-full p-8 bg-purple/80 backdrop-blur-sm">
            <Link onClick={() => setMemberOverflow(true)}>Show more</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Widget;
