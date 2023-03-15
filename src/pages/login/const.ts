import * as Yup from 'yup';

import { Password } from "@mui/icons-material";
import { User } from "../../types/user";

export const loginFormInitialValues: User = {
  email: '',
  password: '',
}

export const loginValidationSchema: Yup.ObjectSchema<User> = Yup.object().shape(
  {
    email: Yup.string().email('Email should contain @').required('Required'),
    password: Yup.string().required('Required')
  }
)


