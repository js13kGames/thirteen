import {decode2d} from './codec/array/decoder';

const letters = {
	"0": "32l9kqda",
	"1": "12la",
	"2": "32l5laba",
	"3": "32l5l9da",
	"4": "32j9l9cm",
	"5": "32l9d9da",
	"6": "32l9dada",
	"7": "32l5ipcm",
	"8": "32l9lada",
	"9": "32l9l9da",
	"A": "32cpkql6",
	"B": "32kplad9",
	"C": "32l9cmba",
	"D": "32kpkqd9",
	"E": "32l9daba",
	"F": "32l9d6b5",
	"G": "42d6apl5j9",
	"H": "32j9lad6",
	"I": "32l6b5ja",
	"J": "32l5iqda",
	"K": "42iqcqb6cm",
	"L": "32ipcmba",
	"M": "52kqj6j6imim",
	"N": "42iqj9l5km",
	"O": "32l9kqda",
	"P": "32l9lab5",
	"Q": "42d6b9d6ja",
	"R": "32kpkqj6",
	"S": "32l9d9da",
	"T": "32l6b5ip",
	"U": "32j9kqda",
	"V": "52imimcpcpb5",
	"W": "52imimj6j6kq",
	"X": "52imcpb5cpim",
	"Y": "32j9j5ip",
	"Z": "52laapb5clla",
	" ": "31vvv",
	".": "22alap",
	"!": "22j6ap",
	"?": "32l5j5ap",
	",": "22alb9",
	"'": "22j5al",
	"-": "32ald9al"
};

for(let key in letters) {
	letters[key] = decode2d(letters[key]);
}

export { letters };