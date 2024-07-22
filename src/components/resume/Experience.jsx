/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import workIcon from "@/assets/icons/work-icon.svg";

export default function Experience({ title, date, place, description }) {
  return (
    <div className="flex sm:gap-5 gap-2 my-8">
      <img src={workIcon} className="self-start mt-2" alt="icon" />
      <div className="">
        <div className="flex justify-between">
          <h4 className="sm:text-2xl text-xl navbar-font">{title}</h4>
          <h5>{date}</h5>
        </div>
        <div className="md:w-[31.6rem] w-[17rem]">
          <p className=" font-extralight opacity-60 flex-col">{place}</p>
          <p className="font-extralight opacity-100 mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
}
