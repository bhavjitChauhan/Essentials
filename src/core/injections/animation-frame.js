_request_id_ = null;

p.requestAnimationFrame = (...args) => {
    const requestID = requestAnimationFrame(...args);
    _request_id_ = requestID;
    return requestID;
};

p.cancelAnimationFrame = requestID => {
    cancelAnimationFrame(requestID);
    if (_request_id_ == requestID) _request_id_ = null;
};
