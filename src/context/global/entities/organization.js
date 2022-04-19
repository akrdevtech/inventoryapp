import { ACTIONS } from "../actions";

const methods = (dispatch) => {
    const createOrganization = (orgData) => {
        dispatch({ type: ACTIONS.ORGANIZATION.CREATE, payload: orgData });
    }

    const deleteOrganization = (orgId) => {
        dispatch({ type: ACTIONS.ORGANIZATION.DELETE, payload: orgId });
    }

    return {
        createOrganization,
        deleteOrganization,
    }
}

export default {
    methods
}