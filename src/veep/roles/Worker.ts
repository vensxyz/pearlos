// import 
import { Veep } from "../Veep";

// Worker
class Worker extends Veep {

    // constructor
    public constructor(hashIn: string) {
        super(hashIn);
    }

    // inherited loop methods
    load(): boolean {
        throw new Error("Method not implemented.");
    }
    run(): boolean {
        throw new Error("Method not implemented.");
    }
    unload(): boolean {
        throw new Error("Method not implemented.");
    }
    
}

// export
export { Worker };