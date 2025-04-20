import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal = ({ open, onClose, title, children }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <div className="relative">
        <IconButton
          onClick={onClose}
          className="absolute right-2 top-2"
          size="small"
        >
          <XMarkIcon className="h-5 w-5" />
        </IconButton>
        
        {title && (
          <DialogTitle className="pr-10">
            {title}
          </DialogTitle>
        )}
        
        <DialogContent>
          {children}
        </DialogContent>
      </div>
    </Dialog>
  );
};