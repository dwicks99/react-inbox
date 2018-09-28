import { ActionTypes } from '../helpers/types'

export const toggleMessageStar = (id) => ({ type: ActionTypes.ToggleMsgStar, payload: id });

export const toggleMessageSelected = (id) => ({ type: ActionTypes.ToggleMsgSelected, payload: id })

export const selectAllMessages = () => ({ type: ActionTypes.SelectAll, payload: 'test' })

export const selectSomeMessages = () => ({ type: ActionTypes.SelectSome, payload: 'test' })