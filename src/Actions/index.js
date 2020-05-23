import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS } from "../Types";
export const Add_Reminder = (text, date) => {
  const action = {
    type: ADD_REMINDER,
    text,
    date,
  };
  return action;
};
export const Remove_Reminder = (id) => {
  const action = {
    type: REMOVE_REMINDER,
    id,
  };
  return action;
};
export const Clear_Reminders = () => {
  const action = {
    type: CLEAR_REMINDERS,
  };
  return action;
};
