import { ActionTypes } from '../helpers/types'

export const toggleMessageStar = (id) => ({ type: ActionTypes.ToggleMsgStar, payload: id });