
class AppException {

    code: Enumerator
    msg: string
    exception: Error

    constructor(code: Enumerator, msg: string, exception: Error) {
        this.code = code
        this.msg = msg
        this.exception = exception
    }
}