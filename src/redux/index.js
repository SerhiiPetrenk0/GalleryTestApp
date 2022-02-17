import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import UnsplashReduser from './reduser';



export const appStore = createStore( UnsplashReduser, applyMiddleware(thunk) )