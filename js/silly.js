// JavaScript source code
var SILLY = (function (module){

    module.doit = function (resultobject) {
        resultobject.prepend(Date() + '<br/>');
    };
    return module;

}(SILLY || {}));
