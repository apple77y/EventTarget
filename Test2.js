class Test2 extends EventTarget {
    constructor() {
        super();

        this.test1 = new Test1;
        this.test1.addEventListener("onSay", this.onSay);
    }

    onSay(event) {
        console.log("***************************");
        console.log("event.detail: ", event.detail);
        console.log("***************************");
    }

    say() {
        this.test1.say();
    }
}
