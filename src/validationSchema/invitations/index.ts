import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
