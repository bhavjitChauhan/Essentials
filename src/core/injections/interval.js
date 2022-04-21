_interval_ids_ = [];

p.setInterval = (...args) => {
    const intervalID = setInterval(...args);
    _interval_ids_.push(intervalID);
    return intervalID;
};

p.cancelInterval = intervalID => {
    clearInterval(intervalID);
    _interval_ids_ = _interval_ids_.filter(id => id != intervalID);
};
