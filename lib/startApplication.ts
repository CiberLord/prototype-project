import { FastifyInstance } from 'fastify';

export const startApplication = (app: FastifyInstance) => {
    app.listen({ port: process.env.PORT })
        .then((result) => {
            // eslint-disable-next-line no-console
            app.log.debug(result);
        })
        .catch((err) => {
            app.log.error(err);
            process.exit(1);
        });
};
