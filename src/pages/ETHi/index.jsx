import React, { memo } from "react";

// === Components === //
import { Modal } from "@/components";

// === Hooks === //
import useModal from "@/hooks/useModal";

const MyModal = memo(
  ({ isOpen, onClose, title, description, closeBtnLabel }) => (
    <Modal open={isOpen} onClose={onClose} title={title}>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        With less than a month to go before the European Union enacts new
        consumer privacy laws for its citizens, companies around the world are
        updating their terms of service agreements to comply.
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes
        into effect on May 25 and is meant to ensure a common set of data rights
        in the European Union. It requires organizations to notify users as soon
        as possible of high-risk data breaches that could personally affect
        them.
      </p>
    </Modal>
  )
);

const ETHi = () => {
  const [showModal, hideModal] = useModal(MyModal, {
    title: "My Test Modal",
    description: "I Like React Hooks",
    closeBtnLabel: "Close",
  });
  console.log(hideModal);
  return (
    <div>
      <p>ETHi</p>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={showModal}
      >
        Toggle modal
      </button>
    </div>
  );
};

export default ETHi;
