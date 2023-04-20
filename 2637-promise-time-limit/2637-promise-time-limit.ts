type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
	return async function(...args) {
        const fns = fn(...args);
        const timeout = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
        });

        return Promise.race([fns, timeout]);
    }
};

function timeLimitNonRace(fn: Fn, t: number): Fn {
	return async function(...args) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);

            fn(...args).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            }).finally(() => {
                clearTimeout(timeout);
            })
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */