import { toast } from 'react-toastify';

export default class Common {
  constructor() {
    throw Error('Static class only');
  }

  static showToast(message, type) {
    const options = {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      theme: 'colored'
    };

    switch (type) {
      case 'success':
        toast.success(message, options);
        break;
      case 'warning':
        toast.warn(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      default:
        toast.info(message, options);
        break;
    }
  }
}
