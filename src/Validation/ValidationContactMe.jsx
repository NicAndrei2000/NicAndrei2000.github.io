export default function ValidationContactMe(
  enteredName,
  enteredEmail,
  enteredMessage
) {
  const errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

  if (enteredName === "") {
    errors.enteredName = "This field is required!";
  }
  if (enteredEmail === "") {
    errors.enteredEmail = "This field is required!";
  } else if (!email_pattern.test(enteredEmail)) {
    errors.enteredEmail = "Email didn't match!";
  }
  if (enteredMessage === "") {
    errors.enteredMessage = "This field is required!";
  }

  return errors;
}
