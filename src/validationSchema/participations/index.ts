import * as yup from 'yup';

export const participationValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
