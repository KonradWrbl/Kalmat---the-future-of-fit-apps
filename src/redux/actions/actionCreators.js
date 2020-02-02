import { AGE, WEIGHT, GROWTH, GENDER, FINISH, BOTTOMMENU } from "./actionsTypes"

export const sendAge = payload => {
    return({
      type: AGE,
      payload,
    })
}

export const sendWeight = payload => {
    return({
      type: WEIGHT,
      payload,
    })
}

export const sendGrowth = payload => {
    return({
      type: GROWTH,
      payload,
    })
}

export const sendGender = payload => {
    return({
      type: GENDER,
      payload,
    })
}

export const sendFinish = payload => {
    return({
      type: FINISH,
      payload,
    })
}

export const sendBottomMenu = payload => {
    return({
      type: BOTTOMMENU,
      payload,
    })
}