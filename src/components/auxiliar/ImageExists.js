const checks = {};

function imageExists(src, callback) {
  if (src in checks) {
    return callback(checks[src]);
  }

  const img = new Image();

  img.onload = function () {
    checks[src] = true;
    callback(true);
  };

  img.onerror = function () {
    checks[src] = false;
    callback(false);
  };

  img.src = src;
}

export default imageExists;
