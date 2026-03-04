import Image from "next/image";
import { RioProfile } from "@/interfaces/RaiderIo";
import { PropsWithChildren, ReactNode } from "react";

type Props = {
  profile?: RioProfile;
  loading?: boolean;
};
type CharacterStatus = "Found" | "Missing" | "Loading";
const statusResponse = function <ResponseType>(
  this: CharacterStatus,
  responses: Partial<Record<CharacterStatus, ResponseType>>,
) {
  return responses[this] as ResponseType;
};

const ProfileImage = ({
  profile,
  status,
}: Props & { status?: CharacterStatus }) =>
  (status === "Found" && (
    <Image
      alt={`${profile?.name}-${profile?.realm}`}
      className="rounded"
      height={64}
      src={profile?.thumbnail_url || ""}
      unoptimized={true}
      width={64}
    />
  )) || <div className="h-[64px] w-[64px] rounded-md bg-dark shrink-0"></div>;

const TextBox = ({
  children,
  className = "",
}: PropsWithChildren<{ className: string }>) => (
  <section className="w-full flex flex-col justify-center items-center">
    <h3 className="text-sm text-white/50">Raider.io result</h3>
    <strong
      className={["flex flex-row justify-between text-left", className].join(
        " ",
      )}
    >
      {children && children}
    </strong>
  </section>
);

const Status = ({
  children,
  className,
}: PropsWithChildren<{ className: string }>) => (
  <div
    className={[
      "text-xl bg-dark p-2 w-[3ch] rounded flex flex-row items-center justify-center",
      className,
    ].join(" ")}
  >
    {children && children}
  </div>
);

const CharacterPreview = (props: Props) => {
  const { profile, loading = false } = props;
  let status: CharacterStatus = "Found";
  if (!profile?.thumbnail_url) {
    status = "Missing";
  }
  if (loading) {
    status = "Loading";
  }

  const useStatus = statusResponse.bind(status);

  return (
    <li
      className={[
        "border-2 border-green/25 border-dotted rounded-md p-2 flex flex-row items-stretch justify-between gap-6",
        useStatus({ Loading: "animate-pulse" }) as string,
      ].join(" ")}
    >
      <ProfileImage {...props} status={status} />
      <TextBox
        className={
          useStatus({
            Found: "text-gold",
            Missing: "text-red",
            Loading: "text-light",
          }) as string
        }
      >
        {
          useStatus({
            Loading: "Loading . . .",
            Missing: "No character found",
            Found: `${profile?.name}-${profile?.realm}`,
          }) as ReactNode
        }
      </TextBox>
      <Status
        className={
          useStatus({
            Found: "bg-green text-dark",
            Missing: "bg-red text-light",
            Loading: "bg-dark text-light",
          }) as string
        }
      >
        {
          useStatus({
            Loading: "...",
            Missing: "✖",
            Found: "✔",
          }) as string
        }
      </Status>
    </li>
  );
};

export default CharacterPreview;
