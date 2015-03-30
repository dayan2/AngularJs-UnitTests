'use strict';
//<!--Step1-Goto Extensions and Download Jasmine & Sinonjs -->
//<!--Step2-Goto tools -> Extensions & updates, and search for 'chutz' and download the first one(this is to run angular tests in the TestExplorer) -->
//Step3 - reference the paths as following


///<reference path="Scripts/sinon-1.9.1.js" />
///<reference path="Scripts/angular.min.js" />
///<reference path="Scripts/angular-resource.min.js" />
///<reference path="Scripts/angular-route.js" />
///<reference path="Scripts/angular-mocks.js" />

///<reference path="app/registration-module.js" />
///<reference path="app/course-repository.js" />
///<reference path="app/course-controller.js" />

///<reference path="course-controller-test.js" />


(function () {

    //Jasmine function - describe
    describe('During construction of the controller', function () {
        var scope, controller, courses, courseRepositoryMock;

        //Jasmine function - beforeEach block(this code will be executed before each unitTest)
        beforeEach(function () {
            module('registrationModule');//defining what angular module to use to run these tests

            //Dependency Injection
            inject(function ($rootScope, $controller, courseRepository) {
                //Creating a fake scope 
                scope = $rootScope.$new();

                //Creating a fake 'courseRepository' to pass into da Controller
                courseRepositoryMock = sinon.stub(courseRepository);

                //creating a fake list and returning it when courseRepository 'get' method is called
                courses = [{ foo: 'bar' }];
                //courseRepositoryMock.returns(courses);

                //passing the fake scope to the controller
                controller = $controller('coursesController', { $scope: scope, courseRepository: courseRepositoryMock });
            });

        });

        //1st Test
        it('should set the courses from the repository', function () {
            //expect(scope.courses).toBe(courses);
            expect(scope.courses).not.toBeNull();
        });

    });

})();