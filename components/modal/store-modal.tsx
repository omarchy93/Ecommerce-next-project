"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="text"
      description="its test des"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      children
    </Modal>
  );
};
