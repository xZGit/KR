/**
 * Created by xx on 15/10/31.
 */


var _changeListeners = null;

var AlertStore = {

    info: "#009926",

    warn: "#660000",

    notifyChange: function (msg, type) {
        _changeListeners(msg, type);
    },
    addChangeListener: function (listener) {
        _changeListeners = listener;
    },
    showWarn: function (msg) {
        AlertStore.notifyChange(msg, AlertStore.warn);
    },
    showInfo: function (msg) {
        AlertStore.notifyChange(msg, AlertStore.info)
    }
};


export default AlertStore;