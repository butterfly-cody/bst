var myApp, deps;

deps = ['angularBootstrapNavTree'];

if (angular.version.full.indexOf("1.2") >= 0) {
    deps.push('ngAnimate');
}

app = angular.module('myApp', deps);
