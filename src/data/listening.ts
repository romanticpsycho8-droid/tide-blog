export interface ListeningNote {
	id: string;
	track: string;
	artist: string;
	album: string;
	duration: string;
	mood: 'chill' | 'renewal';
	moodLabel: string;
	spotifyId: string;
	spotifyUrl: string;
	cover: string;
	// Add the personal essay here. An empty string leaves a quiet writing space.
	note: string;
}

export const listeningNotes: ListeningNote[] = [
	{
		id: 'indestructible',
		track: 'Indestructible',
		artist: 'MEOVV',
		album: 'GO HARD',
		duration: '2:49',
		mood: 'renewal',
		moodLabel: '向新生',
		spotifyId: '13pJIAyPBaFQg7cQ518iOA',
		spotifyUrl: 'https://open.spotify.com/track/13pJIAyPBaFQg7cQ518iOA?utm_source=openai&utm_medium=chatgpt&go=1&nap_web=1&request_id=89e273bb-3223-4242-bc9d-2f5a26208e68',
		cover: 'https://i.scdn.co/image/ab67616d0000b2738c0365c9b2f4bd7873e20de1',
		note: 'last time was the last time .近期最喜欢的一首歌了www\n对过去的眼泪一并擦干，每次听到都会不由自主向前奔跑起来，仿佛一切都有希望。',
	},
	{
		id: 'curiosity',
		track: 'Curiosity',
		artist: 'Carly Rae Jepsen',
		album: 'Kiss',
		duration: '3:33',
		mood: 'chill',
		moodLabel: '松口气',
		spotifyId: '0x9H4bhF1x7bZOPNQhYez7',
		spotifyUrl: 'https://open.spotify.com/track/0x9H4bhF1x7bZOPNQhYez7?utm_source=openai&utm_medium=chatgpt&go=1&nap_web=1&request_id=67870ca9-c4c0-4166-8625-26d13aa6c2ba',
		cover: 'https://i.scdn.co/image/ab67616d0000b2735039eac30f931ef39405717b',
		note: '',
	},
];
