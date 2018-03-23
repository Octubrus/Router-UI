var home = {
    template: `
        <div>Home</div>
    `
};

angular
    .module('home')
    .component('home', home)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            });
        $urlRouterProvider.otherwise('/');
    });