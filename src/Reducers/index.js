import { ADD_REMINDER } from "../Types";
const reminder = (state = [], action) => {
  let reminders = [];
  if (action.type === ADD_REMINDER) {
    reminders = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ];

    return reminders;
  }
};
export default reminder;
