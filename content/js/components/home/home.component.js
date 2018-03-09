var home = {
    template: `
        <div>Home</div>
    `
};

angular
    .module('home')
    .component('home', home)
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            })
    });