import Image from "next/image";
import { RioProfile } from "@/interfaces/RaiderIo";
import writeSummary from "@/utils/writeSummary";

type Props = {
  profile: RioProfile;
  filter?: string;
};

const Profile = ({ filter, profile }: Props) => (
  <li className="md:max-w-[50%] w-full min-w-0" key={profile.profile_url}>
    <a
      className="group flex flex-row items-center gap-3 p-1 m-1 rounded-md bg-dark/60 bg-[length:200%_200%] bg-[center_top_0%] hover:bg-[center_top_100%] focus:bg-[center_top_100%] focus:outline-none bg-gradient-to-b from-blue/25 via-blue/25 to-gold/10 border border-blue hover:border-gold focus:border-gold transition-all"
      href={profile.profile_url}
    >
      <div className="rounded-sm border border-blue group-hover:border-gold group-focus:border-gold transition-all relative flex-shrink-0">
        <Image
          alt={`${profile.name}-${profile.realm}`}
          height={32}
          src={profile.thumbnail_url}
          unoptimized={true}
          width={32}
        />
      </div>
      <strong className="flex flex-row justify-between flex-grow text-left">
        <div className="truncate flex-grow min-w-px w-px max-w-full">
          {profile.name}-{profile.realm}
        </div>
        {filter && (
          <div className="px-2 text-xs">
            {writeSummary(profile.raid_progression[filter])}
          </div>
        )}
      </strong>
    </a>
  </li>
);

export default Profile;
