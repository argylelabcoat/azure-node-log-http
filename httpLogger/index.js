module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello World"
        };
    context.bindings.outputBlob = JSON.stringify(req);
    context.done();
};