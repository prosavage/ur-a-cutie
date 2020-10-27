const setupContext = (ctx) => {
    let protocol = 'https:'
    let host = ctx.req ? ctx.req.headers.host : window.location.hostname
    if (host.indexOf('localhost') > -1) {
        protocol = 'http:'
    }
    ctx.hostName = `${protocol}//${host}`
}

export default setupContext;