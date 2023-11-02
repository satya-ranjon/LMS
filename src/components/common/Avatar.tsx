export enum AvatarSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum AvatarRound {
  F = "full",
  H = "half",
}

export enum AvatarActiveStatusPosition {
  T = "top-0",
  B = "bottom-0",
}

interface AvatarProps {
  url?: string;
  placeholder?: string;
  size?: AvatarSize;
  avatarRounded?: AvatarRound;
  activeStatus?: true | false;
  activeStatusPosition?: AvatarActiveStatusPosition;
}

const Avatar: React.FC<AvatarProps> = ({
  url,
  placeholder,
  size = AvatarSize.MD,
  avatarRounded = AvatarRound.F,
  activeStatus = false,
  activeStatusPosition = AvatarActiveStatusPosition.T,
}) => {
  return (
    <div className="relative">
      {url && (
        <img
          className={`
        ${size === AvatarSize.SM && "w-8 h-8"} 
        ${size === AvatarSize.MD && "w-10 h-10"} 
        ${size === AvatarSize.LG && "w-12 h-12"}
        ${avatarRounded === AvatarRound.F && "rounded-full"}
        ${avatarRounded === AvatarRound.H && "rounded"}
        `}
          src={url}
          alt=""
        />
      )}

      {!url && (
        <div
          className={`
          ${size === AvatarSize.SM && "w-8 h-8"} 
          ${size === AvatarSize.MD && "w-10 h-10"} 
          ${size === AvatarSize.LG && "w-12 h-12"}
          ${avatarRounded === AvatarRound.F && "rounded-full"} 
          ${avatarRounded === AvatarRound.H && "rounded"}
          ${placeholder && "inline-flex items-center justify-center"}
          relative w-10 h-10 overflow-hidden bg-gray-100  dark:bg-gray-600
          `}>
          {!placeholder && (
            <svg
              className={`
            ${size === AvatarSize.SM && "w-10 h-10"} 
            ${size === AvatarSize.MD && "w-12 h-12"} 
            ${size === AvatarSize.LG && "w-14 h-14"}
            absolute  text-gray-400 -left-1`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"></path>
            </svg>
          )}
          {placeholder && (
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {placeholder?.slice(0, 2)}
            </span>
          )}
        </div>
      )}

      {activeStatus && (
        <span
          className={`
          ${activeStatusPosition} 
          ${size === AvatarSize.SM && "left-6 w-3 h-3"} 
          ${size === AvatarSize.MD && "left-7 w-3.5 h-3.5"} 
          ${size === AvatarSize.LG && "left-9 w-4 h-4"} 
          absolute   bg-lime-400 border-2 border-white dark:border-gray-800 rounded-full`}></span>
      )}
    </div>
  );
};

export default Avatar;
