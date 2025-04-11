import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\AccountController::index
 * @see app/Http/Controllers/AccountController.php:21
 * @route /account
 */
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '\/account',
}

/**
 * @see \App\Http\Controllers\AccountController::index
 * @see app/Http/Controllers/AccountController.php:21
 * @route /account
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\AccountController::index
 * @see app/Http/Controllers/AccountController.php:21
 * @route /account
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\AccountController::index
 * @see app/Http/Controllers/AccountController.php:21
 * @route /account
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const AccountController = { index }

export default AccountController