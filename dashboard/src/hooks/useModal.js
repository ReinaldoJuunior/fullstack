import bus from '../router/utils/bus.js'

const EVENT_NAME = 'modal:toggle'

export default function useModal() {

    function open(payload = {}) {
        bus.emit(EVENT_NAME, { status: true, ...payload });
    }

    function close(payload = {}) {
        bus.emit(EVENT.NAME, { status: false, ...payload })
    }
    function listen (fn){
        bus.on(EVENT.NAME, fn)
    }
    function off(fn){
        bus.off(EVENT.NAME, fn);
    }

    return { open, close, listen, off }

}