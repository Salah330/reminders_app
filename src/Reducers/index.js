import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS } from "../Types";
import { bake_cookie, read_cookie } from "sfcookies";
const reminder = (state = [], action) => {
  let reminders = [];
  state = read_cookie("reminders");
  if (action.type === ADD_REMINDER && action.text != "") {
    reminders = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ];
    bake_cookie("reminders", reminders);
    return reminders;
  } else if (action.type === REMOVE_REMINDER) {
    const reminders = state.filter((reminder) => reminder.id !== action.id);
    bake_cookie("reminders", reminders);
    return reminders;
  } else if (action.type === CLEAR_REMINDERS) {
    const reminders = [];
    bake_cookie("reminders", reminders);
    return reminders;
  } else {
    return state;
  }
};
export default reminder;
