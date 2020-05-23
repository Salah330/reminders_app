import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS } from "../Types";
const reminder = (state = [], action) => {
  let reminders = [];
  if (action.type === ADD_REMINDER && action.text != "") {
    reminders = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ];
    return reminders;
  } else if (action.type === REMOVE_REMINDER) {
    const reminders = state.filter((reminder) => reminder.id !== action.id);
    return reminders;
  } else if (action.type === CLEAR_REMINDERS) {
    const reminders = [];
    return reminders;
  } else {
    return state;
  }
};
export default reminder;
