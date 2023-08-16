import get from "./utlis/getElement.js";
import getUser from "./utlis/fetchUser.js";
import displayUser from "./utlis/displayUser.js";

const btn = get(".btn");

const showUser = async () => {
  const person = await getUser();
  displayUser(person);
  // get user from api
  // display user
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
