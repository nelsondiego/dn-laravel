import { queryParams, type QueryParams } from './../wayfinder'

/**
 * @see \App\Http\Controllers\AccountController::account
 * @see app/Http/Controllers/AccountController.php:21
 * @route /account
 */
export const account = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: account.url(options),
    method: 'get',
})

account.definition = {
    methods: ['get','head'],
    url: '\/account',
}

/**
 * @see \App\Http\Controllers\AccountController::account
 * @see app/Http/Controllers/AccountController.php:21
 * @route /account
 */
account.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return account.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\AccountController::account
 * @see app/Http/Controllers/AccountController.php:21
 * @route /account
 */
account.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: account.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\AccountController::account
 * @see app/Http/Controllers/AccountController.php:21
 * @route /account
 */
account.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: account.url(options),
    method: 'head',
})

export default account