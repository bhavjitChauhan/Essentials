_handleRestart = () => {
    if (_interval_ids_.length > 0) {
        _interval_ids_.forEach(intervalID => clearInterval(intervalID));
        _interval_ids_ = [];
    }
    if (_request_id_ != null) {
        cancelAnimationFrame(_request_id_);
        _request_id_ = null;
    }    
    if (typeof COLOR_ESSENTIALS != 'undefined') {
        noShadow();
        shadowBlur(0);
        shadowOffset(0, 0);
    }
    if (typeof SHAPE_ESSENTIALS != 'undefined') {
        noStrokeDash();
        strokeDashOffset(0);
    }
    if (typeof EXTERNAL_ESSENTIALS != 'undefined') {
        clearElements();
        closeLog();
        exitPointerLock();
        forceAllowScroll();
    }
    p.colorMode(p.RGB, 255);
    p.draw = noop;
};
