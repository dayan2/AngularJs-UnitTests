registrationModule.factory('courseRepository', function ($resource) {    
    return $resource('/Home/Index').query();
    
});