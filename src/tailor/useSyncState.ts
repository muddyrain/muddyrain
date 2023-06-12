import { useRef } from 'react';

export function useSyncState<T>(
	initState: T
): [
	getState: <K extends keyof T>(key: K) => T[K],
	setState: <K extends keyof T>(key: K, value: T[K]) => void,
	getAllState: () => T
] {
	const state = useRef<T>(initState);

	function setState<K extends keyof T>(key: K, value: T[K]) {
		state.current[key] = value;
	}
	function getState<K extends keyof T>(key: K): T[K] {
		return state.current[key];
	}
	function getAllState() {
		return state.current;
	}
	return [getState, setState, getAllState];
}
