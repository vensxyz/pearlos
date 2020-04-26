interface PearlMemory {
    version: string;
    verified: boolean;
    
    room: string;
}

interface Memory {
    pearlMemory: PearlMemory;
}

declare namespace NodeJS {
    interface Global {
        log: any;
    }
}