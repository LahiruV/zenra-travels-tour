import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '@zenra/models';

export const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      {...props}
      variant={variant === 'outline' ? 'outlined' : variant === 'text' ? 'text' : 'contained'}
      color={variant === 'primary' ? 'primary' : 'secondary'}
      size={size}
      fullWidth={fullWidth}
      disabled={loading}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </MuiButton>
  );
};