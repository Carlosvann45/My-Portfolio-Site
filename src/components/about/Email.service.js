import Constants from '../../utils/Constants';
import HttpHelper from '../../utils/HttpHelper';

const sendEmail = async (body) => HttpHelper(Constants.EMAIL_ROUTE, Constants.POST, body)
  .then((res) => res.json())
  .then((res) => {
    if (res.status === 400) {
      return {
        sent: false,
        message: res.message
      };
    } if (res.status === 200) {
      return {
        sent: true
      };
    }
    throw Error();
  })
  .catch(() => ({
    sent: false,
    message: 'There was an issue sending email. Please try again later'
  }));

export default sendEmail;
