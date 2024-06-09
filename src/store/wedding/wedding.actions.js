import { createAction } from "redux-actions";

class WeddingActions {
  SET_GUEST = "SET_GUEST";
  SET_MENU = "SET_MENU";

  setGuest = createAction(this.SET_GUEST);
  setMenu = createAction(this.SET_MENU);
}

export const weddingActions = new WeddingActions();
