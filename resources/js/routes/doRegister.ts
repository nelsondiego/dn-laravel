import { queryParams, type QueryParams } from './../wayfinder'

/**
 * @see \App\Http\Controllers\Auth\AuthController::doRegister
 * @see app/Http/Controllers/Auth/AuthController.php:34
 * @route /register
 */
export const doRegister = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: doRegister.url(options),
    method: 'post',
})

doRegister.definition = {
    methods: ['post'],
    url: '\/register',
}

/**
 * @see \App\Http\Controllers\Auth\AuthController::doRegister
 * @see app/Http/Controllers/Auth/AuthController.php:34
 * @route /register
 */
doRegister.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return doRegister.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\AuthController::doRegister
 * @see app/Http/Controllers/Auth/AuthController.php:34
 * @route /register
 */
doRegister.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: doRegister.url(options),
    method: 'post',
})

export default doRegister