import Constants from "../../utils/Constants";
import HttpHelper from "../../utils/HttpHelper";

const sendEmail = async (body) =>
  HttpHelper(Constants.EMAIL_ROUTE, Constants.POST, body)
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 400) {
        return {
          sent: false,
          message: res.message,
        };
      }
      return {
        sent: true,
      };
    })
    .catch(() => ({
      sent: false,
      message: "There was an issue sending email. Please try again later",
    }));

export default sendEmail;
