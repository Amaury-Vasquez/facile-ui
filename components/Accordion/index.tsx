import { FC } from 'react';
import { IconType } from 'react-icons';
import { FaAngleRight } from 'react-icons/fa';
import { useToggle } from 'hooks';
import clsx from 'clsx';

interface AccordionProps {
  className?: string;
  toggleableContent: JSX.Element;
  bordered?: boolean;
  text: string;
  filled?: boolean;
  active?: boolean;
  Icon?: IconType;
}

const Accordion: FC<AccordionProps> = ({
  className,
  toggleableContent,
  text,
  active = false,
  filled = true,
  bordered = false,
  Icon = FaAngleRight,
}) => {
  const { isActive, willClose, handleClick } = useToggle(active);

  return (
    <div
      className={clsx(
        'w-full h-auto flex flex-col relative',
        bordered && 'border border-violet-600 border-solid',
        className
      )}
    >
      <button
        className={clsx(
          'flex items-center justify-center gap-x-[2px] capitalize text-inherit font-semibold px-4 py-2 w-full',
          filled && 'bg-violet-800 text-white'
        )}
        disabled={willClose}
        onClick={handleClick}
      >
        {text}
        <Icon
          className={clsx(
            isActive && 'animate-rotate-90 transform rotate-90',
            willClose && 'animate-rotate-from-90 transform rotate-0'
          )}
        />
      </button>
      {isActive && (
        <div
          className={clsx(
            'w-full h-auto origin-top',
            isActive && 'animate-to-bottom',
            willClose && 'animate-to-top'
          )}
        >
          {toggleableContent}
        </div>
      )}
    </div>
  );
};

export default Accordion;
