import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			if (action.payload.status === 200) {
				return state.concat(action.payload.data);
			}
	}
	return state;
}
