import { writable } from "svelte/store";

export const isLoading = writable(false);

export const outputText = writable("Konkani amchi mai bass")