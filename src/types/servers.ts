export type GameType = 'FPS' | 'MOBA' | 'RPG' | 'Strategy' | 'Survival' | 'Open World' | '2D Sandbox';

export type GameServer = {
            id: number,
            name: string,
            gameType: GameType,
            isOnline: boolean,
            isPopular: boolean,
            maxPlayers: number,
            speed: number
        }