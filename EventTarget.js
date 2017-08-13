// ref: https://developer.mozilla.org/ko/docs/Web/API/EventTarget
class EventTarget {
    constructor() {
        this.listeners = {};
    }

    addEventListener(type, callback) {
        if (!(type in this.listeners)) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    }

    removeEventListener(type, callback) {
        if (!(type in this.listeners)) {
            return;
        }
        const stack = this.listeners[type];
        for (var i = 0, l = stack.length; i < l; i++) {
            if (stack[i] === callback) {
                stack.splice(i, 1);
                return this.removeEventListener(type, callback);
            }
        }
    }

    dispatchEvent(event) {
        if (!(event.type in this.listeners)) {
            return;
        }
        const stack = this.listeners[event.type];
        for (var i = 0, l = stack.length; i < l; i++) {
            stack[i].call(this, event);
        }
    }
}