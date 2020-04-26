// import
import { CONFIG } from "config";

// Pearl
class Pearl {

    // cached
    private pearlId: string;
    // memory
    private pearlMemory: PearlMemory;

    // constructor
    public constructor(pearlIdIn: string) {
        this.pearlId = pearlIdIn;
        this.pearlMemory = Memory.pearlMemory;

        if (! this.pearlMemory?.verified) {
            this.loadConfig();
        }
    }

    // loop
    public load() {
        console.log(`Pearl("${this.pearlId}").load()`);
        
        this.pearlMemory = Memory.pearlMemory;
    }
    public run() {
        console.log(`Pearl("${this.pearlId}").run()`);
    }
    public unload() {
        console.log(`Pearl("${this.pearlId}").unload()`);

        Memory.pearlMemory = this.pearlMemory;
    }

    // internal
    private loadConfig() {
        console.log("loadConfig()");

        this.pearlMemory.version = CONFIG.version;
        this.pearlMemory.room = CONFIG.room;
        this.pearlMemory.verified = true;
    }

}

// export
export { Pearl };