export interface ProgressProps extends React.SVGAttributes<SVGSVGElement> {
  value?: number;
  max?: number;
  min?: number;
  size?: number;
  trackSize?: number;
  variant?: 'linear' | 'circular';
  color?: 'default' | 'success' | 'info' | 'warning' | 'error';
  progressLabel?: boolean;
  determinate?: boolean;
  className?: string;
  containerClassName?: string;
  trackClassName?: string;
  progressClassName?: string;
  labelClassName?: string;
}

export interface TemplateProps extends ProgressProps {
  title: string;
}
