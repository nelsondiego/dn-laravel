import { queryParams, type QueryParams } from './../wayfinder'

/**
 * @see \App\Http\Controllers\Auth\AuthController::doLogin
 * @see app/Http/Controllers/Auth/AuthController.php:25
 * @route /login
 */
export const doLogin = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: doLogin.url(options),
    method: 'post',
})

doLogin.definition = {
    methods: ['post'],
    url: '\/login',
}

/**
 * @see \App\Http\Controllers\Auth\AuthController::doLogin
 * @see app/Http/Controllers/Auth/AuthController.php:25
 * @route /login
 */
doLogin.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return doLogin.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\AuthController::doLogin
 * @see app/Http/Controllers/Auth/AuthController.php:25
 * @route /login
 */
doLogin.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: doLogin.url(options),
    method: 'post',
})

export default doLogin