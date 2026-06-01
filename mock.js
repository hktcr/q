const document = { getElementById: () => ({ style: {}, classList: { add: () => {}, remove: () => {} } }), querySelectorAll: () => [] };
const window = { location: { search: '' } };
const URLSearchParams = class { constructor() {} get() { return null; } };
const fetch = async () => {};
