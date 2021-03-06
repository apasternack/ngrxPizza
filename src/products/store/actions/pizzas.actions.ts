import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';


//load pizzas, namespaced where it lives, in this case the Products Module

export const LOAD_PIZZAS = '[Products Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products Load Pizzas';
export const LOAD_PIZZAS_SUCCESS = '[Products Load Pizzas';

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) {}
    
}

// action types

export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;