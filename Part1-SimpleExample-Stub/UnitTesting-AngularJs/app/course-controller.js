registrationModule.controller('coursesController', function ($scope, courseRepository) {
    $scope.courses = courseRepository;
});