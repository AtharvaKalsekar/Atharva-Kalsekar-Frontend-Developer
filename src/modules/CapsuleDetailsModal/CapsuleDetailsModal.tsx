import { Capsule } from '@models';
import { format } from 'date-fns';
import { Modal } from 'src/components/Modal';

type CapsuleDetailsModalProps = {
  onClose: () => void;
  capsule: Capsule;
};

const CapsuleDetailsModal = ({
  capsule,
  onClose,
}: CapsuleDetailsModalProps) => {
  return (
    <Modal onClickClose={onClose}>
      <div className="flex flex-row bg-white py-3">
        <div className="w-1/2 px-2">
          <div className="my-1">
            <b>Serial : </b> {capsule.capsuleSerial ?? "-"}{" "}
          </div>
          <div className="my-1">
            <b>Capsule-ID : </b> {capsule.capsuleId ?? "-"}{" "}
          </div>
          <div className="my-1">
            <b>Status : </b> {capsule.status ?? "-"}{" "}
          </div>
          <div className="my-1">
            <b>Original launch : </b>{" "}
            {format(new Date(capsule.originalLaunch), "do MMM yyyy")}{" "}
          </div>
          <div className="my-1">
            <b>Missions : </b>{" "}
            {capsule?.missions?.map((mission) => mission.name).join(",") ?? "-"}{" "}
          </div>
        </div>
        <div className="w-1/2 overflow-hidden rounded-md">
          <img
            className="h-full rounded-md object-cover"
            src={"/images/capsule.jpeg"}
            alt={"capsule"}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CapsuleDetailsModal;
