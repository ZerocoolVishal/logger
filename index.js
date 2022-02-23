function logger(type, message) {
    const date = new Date();
    if (['info', 'warn', 'error'].includes(type)) {
        console[type](`${date.toString()} | ${type} | ${message}`);
        return;
    }
    console.log(`${date.toString()} | ${type} | ${message}`);
}

module.exports.logger = logger;
