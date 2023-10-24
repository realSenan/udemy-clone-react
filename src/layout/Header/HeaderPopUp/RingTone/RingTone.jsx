import { useState } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
const RingTone = () => {
    const [mouseEnter, setMouseEnter] = useState(false);
    const [activeteStatus, setActiveteStatus] = useState(true);

    const mouseHandler = (e) => {
        setMouseEnter(true);
    };

    const LeaveMouseHandler = (e) => {
        setMouseEnter(false);
    };
    return (
        <div
            onMouseEnter={mouseHandler}
            onMouseLeave={LeaveMouseHandler}
            className="relative hover:text-activeClr"
        >
            <div className="cursor-pointer ">
                <MdOutlineNotificationsActive size={22} />
            </div>

            {mouseEnter && (
                <div className="absolute  right-0 pt-9 top-4 PopDown">
                    <div className="bg-white shadow-lg w-[22.75rem] min-h-[6rem] p-3">
                        <div className="flex justify-between items-center">
                            <span className="text-activeButton text-lg font-bold">
                                Notifications
                            </span>
                            <span className="font-bold text-activeClr text-sm">Settings</span>
                        </div>

                        <div className="mt-8 flex items-center font-bold text-disableColor">
                            <div
                                onClick={(e) => setActiveteStatus(true)}
                                className={`w-full border-b-2 border-border text-center pb-3 cursor-pointer ${
                                    activeteStatus ? "ringtoneActive" : ""
                                }`}
                            >
                                instructor
                            </div>
                            <div
                                onClick={(e) => setActiveteStatus(false)}
                                className={`w-full border-b-2 border-border text-center pb-3  cursor-pointer ${
                                    activeteStatus ? "" : "ringtoneActive"
                                }`}
                            >
                                Student
                            </div>
                        </div>

                        <div className="pt-4 py-2 text-center text-disableColor">
                            No notifications.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RingTone;
