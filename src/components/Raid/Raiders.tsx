import Profile from "./Profile";
import { RioProfile } from "@/interfaces/RaiderIo";

type Props = {
  profiles: RioProfile[];
  filter?: string;
};

const Raiders = ({ profiles, filter }: Props) => {
  return (
    <ul className="flex flex-row flex-wrap">
      {profiles.map((profile) => (
        <Profile filter={filter} key={profile.profile_url} profile={profile} />
      ))}
    </ul>
  );
};

export default Raiders;
