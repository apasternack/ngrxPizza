import * as fromPizzas from '../actions/pizzas.actions';
import { Pizza } from '../../models/pizza.model'; 

export interface PizzaState {
    data: Pizza[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: PizzaState = {
    data: [],
    loaded: false,
    loading: false,
}

export function reducer(
    state = initialState,
    action: any
): PizzaState {
    return state;
}