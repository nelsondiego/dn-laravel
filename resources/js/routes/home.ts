import { queryParams, type QueryParams } from './../wayfinder'

/**
 * @see \Inertia\Controller::home
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:9
 * @route /
 */
export const home = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ['get','head'],
    url: '\/',
}

/**
 * @see \Inertia\Controller::home
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:9
 * @route /
 */
home.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see \Inertia\Controller::home
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:9
 * @route /
 */
home.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: home.url(options),
    method: 'get',
})

/**
 * @see \Inertia\Controller::home
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:9
 * @route /
 */
home.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: home.url(options),
    method: 'head',
})

export default home