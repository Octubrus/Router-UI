var contactEmail = {
    template: `
    <div>Contact via email: augustinasv@gmail.com</div>
    `
};

angular
    .module('contact')
    .component('contactEmail', contactEmail)
    .config(function ($stateProvider) {
        $stateProvider
            .state('contact.email', {
                url: '/email',
                component: 'contactEmail'
            });
    });