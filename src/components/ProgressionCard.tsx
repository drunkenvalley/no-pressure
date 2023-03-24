export interface ProgressionCardProps {
  bosses: number;
  heroic?: number;
  image: string;
  mythic?: number;
  name: string;
  normal?: number;
}

const ProgressionCard = ({
  bosses,
  heroic = 0,
  image,
  mythic = 0,
  name,
  normal = 0,
}: ProgressionCardProps) => (
  <div className="bg-dark p-4 rounded w-full p-4 my-4 ">
    <div className="flex items-center">
      <img className="h-48 w-full object-cover rounded" src={image} />
      <div className="w-full">
        <h3 className="text-2xl">{name}</h3>
        <div className="flex w-full items-center justify-evenly mt-2">
          <p className="text-green">
            {normal} / {bosses} Normal
          </p>
          <p className="text-green">
            {heroic} / {bosses} Heroic
          </p>
          <p className="text-green">
            {mythic} / {bosses} Mythic
          </p>
        </div>
      </div>
    </div>
    <div className="w-full mt-4">
      <h4 className="text-xl">Raid Leaders</h4>
      <p className="text-orange mt-2">No content available.</p>
    </div>
  </div>
);

export default ProgressionCard;
