import { toast } from "react-toastify";


export const copyToClipboard = (ref) => {
  if (!ref || !ref.current) {
    return; // Return if the ref is invalid
  }

  ref.current.select();
  document.execCommand('copy');
  toast.success('Copied successfully');
};    