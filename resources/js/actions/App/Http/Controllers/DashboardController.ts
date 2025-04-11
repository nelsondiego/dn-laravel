import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:10
 * @route /dashboard
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
    url: '\/dashboard',
}

/**
 * @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:10
 * @route /dashboard
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:10
 * @route /dashboard
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:10
 * @route /dashboard
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const DashboardController = { index }

export default DashboardController