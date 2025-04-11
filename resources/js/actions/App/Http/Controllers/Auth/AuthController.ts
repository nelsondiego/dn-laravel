import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
 * @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:21
 * @route /login
 */
export const login = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ['get','head'],
    url: '\/login',
}

/**
 * @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:21
 * @route /login
 */
login.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return login.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:21
 * @route /login
 */
login.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: login.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Auth\AuthController::login
 * @see app/Http/Controllers/Auth/AuthController.php:21
 * @route /login
 */
login.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: login.url(options),
    method: 'head',
})

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

/**
 * @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:30
 * @route /register
 */
export const register = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ['get','head'],
    url: '\/register',
}

/**
 * @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:30
 * @route /register
 */
register.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return register.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:30
 * @route /register
 */
register.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: register.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Auth\AuthController::register
 * @see app/Http/Controllers/Auth/AuthController.php:30
 * @route /register
 */
register.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: register.url(options),
    method: 'head',
})

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

/**
 * @see \App\Http\Controllers\Auth\AuthController::logout
 * @see app/Http/Controllers/Auth/AuthController.php:40
 * @route /logout
 */
export const logout = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ['post'],
    url: '\/logout',
}

/**
 * @see \App\Http\Controllers\Auth\AuthController::logout
 * @see app/Http/Controllers/Auth/AuthController.php:40
 * @route /logout
 */
logout.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return logout.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\AuthController::logout
 * @see app/Http/Controllers/Auth/AuthController.php:40
 * @route /logout
 */
logout.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: logout.url(options),
    method: 'post',
})

const AuthController = { login, doLogin, register, doRegister, logout }

export default AuthController