import { ADD_REMINDER } from "../Types";
export const Add_Reminder = (text, date) => {
  const action = {
    type: ADD_REMINDER,
    text,
    date,
  };
  return action;
};
