import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './createStore';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
