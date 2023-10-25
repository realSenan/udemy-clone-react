import { nanoid } from "nanoid";
import { AiFillPlusCircle } from "react-icons/ai";

const LearningTools = () => {
    const country_codes = [
        "+1 (United States)",
        "+44 (United Kingdom)",
        "+33 (France)",
        "+49 (Germany)",
        "+81 (Japan)",
        "+86 (China)",
        "+91 (India)",
        "+7 (Russia)",
        "+55 (Brazil)",
        "+61 (Australia)",
        "+90 (Turkey)",
        "+20 (Egypt)",
        "+234 (Nigeria)",
        "+82 (South Korea)",
        "+46 (Sweden)",
        "+34 (Spain)",
        "+52 (Mexico)",
        "+64 (New Zealand)",
        "+86 (China)",
        "+82 (South Korea)",
        "+971 (United Arab Emirates)",
        "+39 (Italy)",
        "+46 (Sweden)",
        "+31 (Netherlands)",
        "+47 (Norway)",
        "+55 (Brazil)",
        "+7 (Russia)",
        "+34 (Spain)",
        "+49 (Germany)",
        "+91 (India)",
        "+972 (Israel)",
        "+971 (United Arab Emirates)",
        "+92 (Pakistan)",
        "+965 (Kuwait)",
        "+966 (Saudi Arabia)",
        "+41 (Switzerland)",
        "+32 (Belgium)",
        "+45 (Denmark)",
        "+65 (Singapore)",
        "+86 (China)",
        "+886 (Taiwan)",
        "+81 (Japan)",
        "+82 (South Korea)",
        "+86 (China)",
        "+1 (Canada)",
        "+52 (Mexico)",
        "+54 (Argentina)",
        "+56 (Chile)",
        "+57 (Colombia)",
        "+58 (Venezuela)",
        "+593 (Ecuador)",
        "+507 (Panama)",
        "+52 (Mexico)",
        "+56 (Chile)",
        "+57 (Colombia)",
        "+595 (Paraguay)",
        "+51 (Peru)",
        "+54 (Argentina)",
        "+55 (Brazil)",
        "+598 (Uruguay)",
        "+7 (Russia)",
        "+961 (Lebanon)",
        "+20 (Egypt)",
        "+961 (Lebanon)",
        "+962 (Jordan)",
        "+966 (Saudi Arabia)",
        "+212 (Morocco)",
        "+213 (Algeria)",
        "+216 (Tunisia)",
        "+20 (Egypt)",
        "+27 (South Africa)",
        "+254 (Kenya)",
        "+61 (Australia)",
        "+64 (New Zealand)",
        "+86 (China)",
        "+82 (South Korea)",
        "+81 (Japan)",
        "+94 (Sri Lanka)",
        "+92 (Pakistan)",
        "+62 (Indonesia)",
        "+60 (Malaysia)",
        "+63 (Philippines)",
        "+65 (Singapore)",
        "+66 (Thailand)",
        "+84 (Vietnam)",
        "+855 (Cambodia)",
        "+971 (United Arab Emirates)",
        "+972 (Israel)",
        "+20 (Egypt)",
        "+234 (Nigeria)",
        "+27 (South Africa)",
        "+251 (Ethiopia)",
        "+256 (Uganda)",
        "+255 (Tanzania)",
        "+225 (Ivory Coast)",
        "+225 (Ivory Coast)",
        "+233 (Ghana)",
        "+212 (Morocco)",
        "+216 (Tunisia)",
        "+1 (Jamaica)",
        "+1 (Trinidad and Tobago)",
        "+52 (Mexico)",
        "+1 (Bahamas)",
        "+1 (Barbados)",
        "+1 (Bermuda)",
        "+1 (Cayman Islands)",
        "+1 (Dominican Republic)",
        "+1 (Haiti)",
        "+1 (Puerto Rico)",
        "+1 (United States Virgin Islands)",
        "+1 (Canada)",
        "+7 (Russia)",
        "+998 (Uzbekistan)",
        "+7 (Kazakhstan)",
        "+994 (Azerbaijan)",
        "+996 (Kyrgyzstan)",
        "+992 (Tajikistan)",
        "+996 (Kyrgyzstan)",
        "+993 (Turkmenistan)",
        "+998 (Uzbekistan)",
        "+381 (Serbia)",
        "+385 (Croatia)",
        "+386 (Slovenia)",
        "+387 (Bosnia and Herzegovina)",
        "+389 (North Macedonia)",
        "+355 (Albania)",
        "+30 (Greece)",
        "+30 (Greece)",
        "+36 (Hungary)",
        "+359 (Bulgaria)",
        "+40 (Romania)",
        "+373 (Moldova)",
        "+370 (Lithuania)",
        "+371 (Latvia)",
        "+372 (Estonia)",
        "+380 (Ukraine)",
        "+48 (Poland)",
        "+420 (Czech Republic)",
        "+421 (Slovakia)",
        "+49 (Germany)",
        "+41 (Switzerland)",
        "+43 (Austria)",
        "+46 (Sweden)",
        "+47 (Norway)",
        "+45 (Denmark)",
        "+358 (Finland)",
        "+354 (Iceland)",
        "+353 (Ireland)",
        "+352 (Luxembourg)",
        "+351 (Portugal)",
        "+34 (Spain)",
        "+377 (Monaco)",
        "+377 (Monaco)",
        "+30 (Greece)",
        "+39 (Italy)",
        "+41 (Switzerland)",
        "+31 (Netherlands)",
        "+32 (Belgium)",
        "+43 (Austria)",
        "+33 (France)",
        "+352 (Luxembourg)",
        "+49 (Germany)",
        "+36 (Hungary)",
        "+34 (Spain)",
        "+39 (Italy)",
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold ">Learning reminders</h1>
            <h3 className="mt-5 font-bold text-lg ">Calendar events</h3>
            <p className="mt-4">
                Learning a little each day adds up. Research shows that students who make learning a
                habit are more likely to reach their goals. Set time aside to learn and get
                reminders using your learning scheduler.
            </p>
            <div className="text-xs text-disableColor mt-2">
                Requires Google Calendar, Apple Calendar, or Outlook
            </div>

            <button className="py-3 px-3 bg-[#a435f0] hover:bg-[#8710d8] flex items-center gap-3 text-white mt-4 font-bold">
                Schedule learning time <AiFillPlusCircle size={20} />
            </button>

            <h3 className="mt-11 font-bold text-liColor text-lg">Push notifications</h3>

            <div className="mt-4">
                Don’t want to schedule time blocks? Set a learning reminder to get push
                notifications from the Udemy mobile app.
            </div>

            <label htmlFor="selBox" className="mt-5 block font-bold text-liColor text-sm">
                Text me a link to download the app
            </label>

            <select id="selBox" className="border max-w-[440px] w-full py-3 px-2 mt-2 outline-none">
                {country_codes.map((country) => (
                    <option key={nanoid()}>{country}</option>
                ))}
            </select>

            <div className="flex items-center mt-3">
                <input
                    className="border px-3 py-2 placeholder:text-disableColor  max-w-[13.125rem] w-full"
                    placeholder="123 456 7890"
                />
                <button className="bg-liColor text-white h-[2.625rem] px-5 hover:bg-opacity-95 font-bold">
                    Send
                </button>
            </div>

            <span className="text-xs text-disableColor">
                By providing your phone number, you agree to receive a one-time automated text
                message with a link to get app. Standard messaging rates may apply.
            </span>
        </div>
    );
};

export default LearningTools;
