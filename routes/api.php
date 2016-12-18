<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::group(['middleware' => 'guest'], function () {
    Route::get('/post/{id}', 'Api\v1\Post\Postcontroller@getPost');
    Route::get('/posts', 'Api\v1\Post\PostController@getPosts');
});
