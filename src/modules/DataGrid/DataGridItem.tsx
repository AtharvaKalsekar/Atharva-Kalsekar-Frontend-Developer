import { Capsule } from '@models';

type DataGridItemProps = {
  capsule: Capsule;
};

export const DataGridItem = ({ capsule }: DataGridItemProps) => {
  return (
    <div className="flex h-[300px] w-[250px] flex-col rounded-md border border-solid border-black">
      <img src={"/images/capsule.jpeg"} alt={"capsule"} />
      <div className="justify-centerS flex w-full flex-col items-center p-6">
        <h2 className="text-lg font-semibold">{capsule.capsuleSerial}</h2>
        <p className="text-sm font-light">
          {capsule.missions.map((mission) => mission.name).join(" ")}
        </p>
      </div>
    </div>
  );
};
