import React, { forwardRef } from "react";
import clsx from "clsx";
// eslint-disable-next-line css-modules/no-unused-class
import s from "./Avatar.module.scss";
import "../style/components/avatar.scss";

interface AvatarProps {
  picture?: string;
  name?: string;
  size?: "small" | "medium" | "large";
  variant?: "circular" | "square";
  defaultPicture?: string;
  className?: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      picture = "",
      name = "",
      size = "medium",
      variant = "circular",
      defaultPicture = "",
      className = "",
      ...rest
    },
    ref,
  ) => {
    const initials = name ? name.slice(0, 2) : "SU";
    const imageSrc = picture || defaultPicture || "";

    return (
      <div
        ref={ref}
        className={clsx(s.root, s[size], s[variant], className)}
        {...rest}
      >
        <div className={s.container}>
          <div className={clsx(s.circular, s[variant])}>
            {imageSrc ? (
              <img alt="avatar" src={imageSrc} className={s.image} />
            ) : (
              <span className={s.initials}>{initials}</span>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
