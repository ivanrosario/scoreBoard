import _ from 'lodash';


export default (state = {}, action) => {
    let newState;

  switch (action.type) {
    case 'INCREMENT':

      newState = _.merge({}, state);
      //sets a new value for score
      _.set(newState, `${action.team}.score`, action.newScore);
      return newState;

    default:
      return state;
  }
}