import * as yup from 'yup';

export const raffleValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
  winner_id: yup.string().nullable(),
});
