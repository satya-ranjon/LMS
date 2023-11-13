import { useRef, useState } from "react";
import { TbBellFilled } from "react-icons/tb";
import useOutsideClick from "../../../hooks/useOutsideClick";

const Notification = () => {
  const [notificationIsOpen, setNotificationIsOpen] = useState<boolean>();

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropdownRef, () => {
    setNotificationIsOpen(false);
  });
  return (
    <div
      ref={dropdownRef}
      className=" flex justify-center items-center relative  ">
      <button
        className=""
        onClick={() => setNotificationIsOpen((prev) => !prev)}>
        <TbBellFilled />
      </button>
      <div className=" w-5 h-5 absolute -top-5 right-0 text-dark-1 text-xs flex justify-center items-center bg-lime-400 rounded-full p-1 font-semibold">
        9
      </div>
      {notificationIsOpen && (
        <div className=" p-1 overflow-y-scroll absolute min-w-[300px] min-h-[500px] max-h-[500px] bg-dark-1 top-16 -right-16 md:right-0 z-50 rounded-sm"></div>
      )}
    </div>
  );
};

export default Notification;
