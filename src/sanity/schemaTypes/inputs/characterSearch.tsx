import { useEffect, useState } from "react";
import RaiderIoService from "@/services/RaiderIoService";
import { RioProfile } from "@/interfaces/RaiderIo";
import { StringInputProps } from "sanity";
import CharacterPreview from "@/components/Raid/CharacterPreview";

export default function CharacterSearch(props: StringInputProps) {
  const { value } = props;
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [loading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<RioProfile>();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  useEffect(() => {
    const [characterName = "", realm = ""] = (debouncedValue ?? "").split("-");
    if (!characterName || !realm) {
      return;
    }

    if (profile?.name != characterName || profile?.realm != realm) {
      (() => setProfile(undefined))();
    }

    RaiderIoService.get({ characterName, realm })
      .then((json) => setProfile(json as RioProfile))
      .finally(() => setLoading(false));
  }, [debouncedValue]);
  return (
    <>
      {props.renderDefault(props)}
      <div className="my-4">
        <CharacterPreview loading={loading} profile={profile} />
      </div>
    </>
  );
}
