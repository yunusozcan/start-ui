import { ReactNode } from 'react';

export interface ToggleItemProps {
  value: string;
  initialState?: boolean;
  onToggle?: (toggled: boolean) => void;
  color?: 'primary' | 'secondary' | 'destructive';
  variant?: 'default' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fluid?: boolean;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export interface ToggleWrapperProps {
  value: string | null;
  onChange: (value: string) => void;
  children: ReactNode | ReactNode[];
  direction?: 'horizontal' | 'vertical';
}
