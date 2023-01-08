/**
 * Error
 * -----------
 * v1.0.0
 */

export class AppException extends Error {

    code: string
    msg: string
    exception: Error

    constructor(code: string, msg: string, exception: Error = null) {

        super(msg)

        this.code = code
        this.msg = msg
        this.exception = exception
    }

}