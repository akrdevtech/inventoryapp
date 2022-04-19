import { ACTIONS } from './actions';
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ORGANIZATION.CREATE:
            return {
                ...state,
                organization: { ...state.organization, organizations: [...state.organization.organizations, action.payload] }
            };

        case ACTIONS.ORGANIZATION.DELETE:
            return {};

        default:
            return state;
    }
}

export default reducer;