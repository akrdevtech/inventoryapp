import React, { useReducer } from 'react';
import GlobalContext from './context';
import entitiesMaster from './entities';
import globalReducer from './reducer';

const GlobalState = (props) => {

  const initialState = {
    organization: {
      organizations: []
    },
  }

  const [state, dispatch] = useReducer(globalReducer, initialState);
  const entities = {};
  Object.keys(entitiesMaster).map(entityItem => {
    entities[entityItem] = { methods: entitiesMaster[entityItem].methods(dispatch) }
  })


  return (
    <GlobalContext.Provider value={{
      globalState: state,
      entities
    }}>{props.children}</GlobalContext.Provider>
  )
}

export default GlobalState;