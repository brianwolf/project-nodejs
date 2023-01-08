
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