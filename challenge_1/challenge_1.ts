function prepareGifts(gifts: number[]): number[] {
	return Array.from(new Set<number>(gifts)).sort((a, b) => a - b);
}

export default prepareGifts;
