class Test1 extends EventTarget {
    constructor() {
        super();
    }

    say() {
        this.dispatchEvent(new CustomEvent("onSay", {
            detail: 1
        }));
    }
}
