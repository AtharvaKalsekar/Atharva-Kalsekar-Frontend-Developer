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
      <div className="flex flex-col-reverse bg-white p-3 sm:flex-row">
        <div className="w-full px-2 sm:w-1/2">
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
        <div className="w-full items-center justify-center overflow-hidden rounded-md sm:mx-3 sm:w-1/2">
          <img
            className="h-[300px] rounded-md object-cover"
            src={"/images/capsule.jpeg"}
            alt={"capsule"}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CapsuleDetailsModal;
