// Robust PDF field helper for the Age of Attraction DTR app.
// Uses field capabilities instead of constructor names / instanceof, which are unreliable in Safari CDN builds.
window.fillMappedPdfField = function(field, value) {
  if (!field) return false;

  if (typeof field.setText === 'function') {
    field.setText(String(value ?? ''));
    return true;
  }

  if (typeof field.check === 'function' && typeof field.uncheck === 'function') {
    if (value === true) field.check();
    else field.uncheck();
    return true;
  }

  if (typeof field.select === 'function') {
    field.select(String(value ?? ''));
    return true;
  }

  return false;
};
