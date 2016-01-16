import { api } from 'config/sources';
import * as types from 'constants/nodes';

// sign in
const loadNodesStarted = () => ({
  type: types.LOAD_NODES,
});

const loadNodesSucceeded = (data) => ({
  type: types.LOAD_NODES_SUCCEEDED,
  ...data,
});

const loadNodesFailed = ({ errors }) => ({
  type: types.LOAD_NODES_FAILED,
  errors,
});

export function loadNodes() {
  return (dispatch) => {
    dispatch(loadNodesStarted());

    return api.get(`nodes`)
      .then(({ body }) => dispatch(loadNodesSucceeded(body)))
      .catch(({ body }) => dispatch(loadNodesFailed(body))
    );
  };
}
