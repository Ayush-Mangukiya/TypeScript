abstract class TakePhoto {
    constructor(public cameraMode: string,
        public filter: string
    ) {}

    // getSepia(): void -> Function implementation is missing or not immediately following the declaration.
    abstract getSepia(): void
    getReelTime(): number {
        return 8
    }
}

// const ayush = new TakePhoto("test", "Test") -> Cannot create an instance of an abstract class.

class Instagram extends TakePhoto {
    constructor(public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("sepia");
    }
}
// But we can create instance from the class which is extending it
const ayush = new Instagram("test", "Test", 3)
ayush.getReelTime();