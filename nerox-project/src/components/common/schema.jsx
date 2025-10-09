import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required("Required field").label("Name"),
  email: Yup.string().required("Required field").email().label("Email"),
  msg: Yup.string().required("Required field").min(20).label("Message"),
});

export default schema;