/* eslint-disable react/prop-types */
import { cn } from "@/utils/cn";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal.jsx";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  images,
  url,
}) => {
  return (
    <div className="xl:py-40 flex items-center justify-center">
      <Modal className="w-full">
        <ModalTrigger
          className={cn(
            "row-span-1 group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 border-white/[0.2] bg-secondary border flex flex-col cursor-pointer h-72",
            className
          )}
        >
          {header}
          <div className="group-hover/bento:translate-x-2 transition duration-200 text-start">
            <div className="font-sans font-bold text-neutral-200 mb-1 mt-2">
              {title}
            </div>
            <div className="font-sans font-normal text-xs text-neutral-300">
              {description}
            </div>
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="relative bg-secondary !border-0 overflow-y-auto">
            <h4 className="text-lg md:text-2xl font-bold text-center mb-4">
              {title}
            </h4>
            <a
              className="text-end underline py-2 hover:text-neutral-400 cursor-pointer"
              href={url}
              target="_blank"
            >
              Go to the project
            </a>
            <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-16 w-fit">
              {/* Product images like a scrollable list vertically */}
              <div className="flex flex-col gap-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};
