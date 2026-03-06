import { HTTPException } from "hono/http-exception";
import type { ContentfulStatusCode } from "hono/utils/http-status";

export class ServiceError extends Error {
    constructor(name?: string, public status: ContentfulStatusCode = 500) {
        super(name)
    }
}

// Natywny error:
// new Error('message of an error')

// Jeszcze lepiej bo integrujemy się z ideą frameworka:
// tylko info że dany execption jest z Srvice Layer
class ServiceError2 extends HTTPException {}