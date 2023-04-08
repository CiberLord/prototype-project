declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            PORT: number;
        }
    }
}

export {};
