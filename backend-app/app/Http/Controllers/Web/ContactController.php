<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return view
     */
    public function index()
    {
        return view('contact.index');
    }
}
