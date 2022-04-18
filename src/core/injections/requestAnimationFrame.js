_request_ids_ = [];

p.requestAnimationFrame = (...args) => {
    const requestID = requestAnimationFrame(...args);
    _request_ids_.push(requestID);
    return requestID;
};
