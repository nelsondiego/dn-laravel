<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

/**
 * Controller for the dashboard functionality
 */
class DashboardController extends Controller
{
    /**
     * Display the dashboard page
     *
     * @return \Inertia\Response
     */
    public function index(){
        return Inertia::render('dashboard/dashboard');
    }
}
