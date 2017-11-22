export const routes = [
  {
    path: '/',
    component: jest.fn(),
    name: 'index'
  },
  {
    path: '/help/tos',
    component: jest.fn(),
    name: 'help-tos'
  },
  {
    path: '/help/privacy',
    component: jest.fn(),
    name: 'help-privacy'
  },
  {
    path: '/help/cookies',
    component: jest.fn(),
    name: 'help-cookies'
  },
  {
    path: '/help/api',
    component: jest.fn(),
    name: 'help-api'
  },
  {
    path: '/admin/project',
    component: jest.fn(),
    name: 'admin-project'
  },
  {
    path: '/account/forgot-password',
    component: jest.fn(),
    name: 'account-forgot-password'
  },
  {
    path: '/admin/collection',
    component: jest.fn(),
    name: 'admin-collection'
  },
  {
    path: '/account/signin',
    component: jest.fn(),
    name: 'account-signin'
  },
  {
    path: '/account/reset-password',
    component: jest.fn(),
    name: 'account-reset-password'
  },
  {
    path: '/account/register',
    component: jest.fn(),
    name: 'account-register'
  },
  {
    path: '/account/newsletter',
    component: jest.fn(),
    name: 'account-newsletter'
  },
  {
    path: '/admin/site',
    component: jest.fn(),
    name: 'admin-site'
  },
  {
    path: '/admin/site/announcements',
    component: jest.fn(),
    name: 'admin-site-announcements'
  },
  {
    path: '/account/register/confirmation',
    component: jest.fn(),
    name: 'account-register-confirmation'
  },
  {
    path: '/admin/site/users',
    component: jest.fn(),
    name: 'admin-site-users'
  },
  {
    path: '/admin/collection/new',
    component: jest.fn(),
    name: 'admin-collection-new'
  },
  {
    path: '/admin/site/jobs',
    component: jest.fn(),
    name: 'admin-site-jobs'
  },
  {
    path: '/admin/site/announcements/new',
    component: jest.fn(),
    name: 'admin-site-announcements-new'
  },
  {
    path: '/admin/site/announcements/:id/update',
    component: jest.fn(),
    name: 'admin-site-announcements-id-update'
  },
  {
    path: '/admin/project/:short_name/thumbnail',
    component: jest.fn(),
    name: 'admin-project-short_name-thumbnail'
  },
  {
    path: '/admin/collection/:short_name/tags',
    component: jest.fn(),
    name: 'admin-collection-short_name-tags'
  },
  {
    path: '/admin/collection/:short_name/volumes',
    component: jest.fn(),
    name: 'admin-collection-short_name-volumes'
  },
  {
    path: '/admin/project/:short_name/tags',
    component: jest.fn(),
    name: 'admin-project-short_name-tags'
  },
  {
    path: '/admin/project/:short_name/settings',
    component: jest.fn(),
    name: 'admin-project-short_name-settings'
  },
  {
    path: '/admin/collection/:short_name/content',
    component: jest.fn(),
    name: 'admin-collection-short_name-content'
  },
  {
    path: '/admin/project/:short_name/presenter',
    component: jest.fn(),
    name: 'admin-project-short_name-presenter'
  },
  {
    path: '/admin/project/:short_name/volume',
    component: jest.fn(),
    name: 'admin-project-short_name-volume'
  },
  {
    path: '/admin/collection/:short_name/settings',
    component: jest.fn(),
    name: 'admin-collection-short_name-settings'
  },
  {
    path: '/admin/collection/:short_name/terminology',
    component: jest.fn(),
    name: 'admin-collection-short_name-terminology'
  },
  {
    path: '/admin/project/:short_name/collection',
    component: jest.fn(),
    name: 'admin-project-short_name-collection'
  },
  {
    path: '/admin/collection/:short_name/featured',
    component: jest.fn(),
    name: 'admin-collection-short_name-featured'
  },
  {
    path: '/admin/collection/:short_name/delete',
    component: jest.fn(),
    name: 'admin-collection-short_name-delete'
  },
  {
    path: '/collection/:short_name?',
    component: jest.fn(),
    name: 'collection-short_name'
  },
  {
    path: '/account/:name?',
    component: jest.fn(),
    name: 'account-name'
  },
  {
    path: '/collection/:short_name?/projects',
    component: jest.fn(),
    name: 'collection-short_name-projects'
  },
  {
    path: '/collection/:short_name?/about',
    component: jest.fn(),
    name: 'collection-short_name-about'
  },
  {
    path: '/account/:name?/announcements',
    component: jest.fn(),
    name: 'account-name-announcements'
  },
  {
    path: '/collection/:short_name?/data',
    component: jest.fn(),
    name: 'collection-short_name-data'
  },
  {
    path: '/account/:name?/settings/profile',
    component: jest.fn(),
    name: 'account-name-settings-profile'
  },
  {
    path: '/account/:name?/settings/api',
    component: jest.fn(),
    name: 'account-name-settings-api'
  },
  {
    path: '/account/:name?/settings/avatar',
    component: jest.fn(),
    name: 'account-name-settings-avatar'
  },
  {
    path: '/account/:name?/settings/security',
    component: jest.fn(),
    name: 'account-name-settings-security'
  },
  {
    path: '/collection/:short_name?/projects/:id/:presenter.vue?',
    component: jest.fn(),
    name: 'collection-short_name-projects-id-presenter.vue'
  },
  {
    path: '/collection/:short_name?/projects/:id/:presenter?',
    component: jest.fn(),
    name: 'collection-short_name-projects-id-presenter'
  }
]
