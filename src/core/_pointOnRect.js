_pointOnRect = (width, height, angle) => {
    angle = -angle;
    while (angle < -Math.PI) {
        angle += e.TAU;
    }
    while (angle > Math.PI) {
        angle -= e.TAU;
    }
    const rectAtan = Math.atan2(height, width);
    const tanTheta = Math.tan(angle);
    let region;
    if ((angle > -rectAtan) && (angle <= rectAtan)) {
        region = 1;
    } else if ((angle > rectAtan) && (angle <= (Math.PI - rectAtan))) {
        region = 2;
    } else if ((angle > (Math.PI - rectAtan)) || (angle <= -(Math.PI - rectAtan))) {
        region = 3;
    } else {
        region = 4;
    }

    const result = {
        x: width / 2,
        y: height / 2
    };

    let dx = 1;
    let dy = 1;
    switch (region) {
        case 1: dy = -1; break;
        case 2: dy = -1; break;
        case 3: dx = -1; break;
        case 4: dx = -1; break;
    }
    if (region == 1 || region == 3) {
        result.x += dx * (width / 2);
        result.y += dy * (width / 2) * tanTheta;
    } else {
        result.x += dx * (height / (2 * tanTheta));
        result.y += dy * (height / 2);
    }

    return result;
};
