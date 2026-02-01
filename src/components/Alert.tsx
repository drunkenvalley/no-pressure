import { PropsWithChildren, ReactNode } from "react";
import {
  CaseIcon,
  EyeOpenIcon,
  FeedbackIcon,
  InboxIcon,
  LinkIcon,
  WarningOutlineIcon,
} from "@sanity/icons";
import { Literals } from "@/interfaces/Literals";

export const Icon = [
  "Case",
  "Eye",
  "Feedback",
  "Inbox",
  "Link",
  "Warning",
] as const;
type IconNames = Literals<typeof Icon>;
const iconResponse = function <ResponseType extends ReactNode>(
  this: IconNames,
  responses: Partial<Record<IconNames, ResponseType>>,
) {
  return responses[this] as ResponseType;
};
interface AlertProps {
  external?: boolean;
  href?: string;
  id: string;
  icon: IconNames;
}

const Alert = ({
  icon = "Feedback",
  children,
}: PropsWithChildren<AlertProps>) => {
  const useIcon = iconResponse.bind(icon);
  return (
    <div className="border border-gold bg-blue/12 p-6 lg:p-4 lg:rounded-lg flex flex-col lg:flex-row gap-6 items-center">
      <div className="text-4xl text-gold">
        {useIcon({
          Case: <CaseIcon />,
          Eye: <EyeOpenIcon />,
          Feedback: <FeedbackIcon />,
          Inbox: <InboxIcon />,
          Link: <LinkIcon />,
          Warning: <WarningOutlineIcon />,
        })}
      </div>
      <article>{children && children}</article>
    </div>
  );
};
export default Alert;
