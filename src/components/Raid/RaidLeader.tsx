import Image from "next/image";
import { RioProfile } from "@/interfaces/RaiderIo";

const RaidLeader = ({ profiles }: { profiles: RioProfile[] }) => (
  <ul className="flex flex-row flex-wrap">
    {profiles.map((profile) => (
      <li className="md:max-w-[50%] w-full min-w-0" key={profile.profile_url}>
        <a
          className="group flex flex-row items-center gap-3 p-1 m-1 rounded-md bg-[length:200%_200%] bg-[center_top_0%] hover:bg-[center_top_100%] focus:bg-[center_top_100%] focus:outline-none bg-gradient-to-b from-blue/25 via-blue/25 to-gold/10 border border-blue hover:border-gold focus:border-gold transition-all"
          href={profile.profile_url}
        >
          <div className="rounded-sm border border-blue group-hover:border-gold group-focus:border-gold transition-all">
            <Image
              alt={`${profile.name}-${profile.realm}`}
              height={32}
              src={profile.thumbnail_url}
              width={32}
            />
          </div>
          <strong>
            {profile.name}-{profile.realm}
          </strong>
        </a>
      </li>
    ))}
  </ul>
);

export default RaidLeader;
