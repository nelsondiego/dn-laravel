import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \Inertia\Controller::Controller
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:9
 * @route /
 */
const Controller = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: Controller.url(options),
    method: 'get',
})

Controller.definition = {
    methods: ['get','head'],
    url: '\/',
}

/**
 * @see \Inertia\Controller::Controller
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:9
 * @route /
 */
Controller.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return Controller.definition.url + queryParams(options)
}

/**
 * @see \Inertia\Controller::Controller
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:9
 * @route /
 */
Controller.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: Controller.url(options),
    method: 'get',
})

/**
 * @see \Inertia\Controller::Controller
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:9
 * @route /
 */
Controller.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: Controller.url(options),
    method: 'head',
})

export default Controller