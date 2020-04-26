// import

// Veep
abstract class Veep {

    protected hash: string;

    // constructor
    public constructor(hashIn: string) {
        this.hash = hashIn;
    }

    // abstract loop methods
    abstract load(): boolean;
    abstract run(): boolean;
    abstract unload(): boolean;

}

// export 
export { Veep };