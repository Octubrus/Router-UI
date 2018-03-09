var about = {
    template: `
        <div>About</div>
    `
};

angular
    .module('about')
    .component('about', about)
    .config(function ($stateProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                component: 'about'
            })
    });