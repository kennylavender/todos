const pipe = (...fns) => v => fns.reduce((a, c) => c(a), v);

export default pipe