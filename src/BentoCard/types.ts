export interface BentoCardProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  rootClassName?: string;
  rootActiveClassName?: string;
  title?: string;
  titleActiveClassName?: string;
  titleClassName?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  isTitleVisibleInFirst?: boolean;
  isTitleVisibleInSecond?: boolean;
  firstContent?: React.ReactNode | string;
  secondContent?: React.ReactNode | string;
  redirectTo?: string;
}

export interface TemplateProps extends BentoCardProps {
  title: string;
}
