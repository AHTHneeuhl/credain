import { Button } from "components/common";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

type TProps = {
  isOpen?: boolean;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryActionLabel?: string;
  secondaryAction?: () => void;
  onClose: () => void;
  onSubmit: () => void;
};
const Modal: React.FC<TProps> = ({
  isOpen,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
  onClose,
  onSubmit,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:ountline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          <div
            className={`translate duration-300 h-full ${
              showModal
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadaw-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center p-6 rounded-t justify-center relative border-b">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              <div className="relative p-6 flex-auto">{body}</div>
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryActionLabel ? (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  ) : null}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
