_interval_ids_ = [];

p.setInterval = (...args) => {
    const intervalID = setInterval(...args);
    _interval_ids_.push(intervalID);
    return intervalID;
};
