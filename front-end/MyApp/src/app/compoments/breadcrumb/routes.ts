

export const path= [{path:'main-page'},{path:'folder-format'}];
export const dashboard = '/drive/'+path[0].path;
export const home = dashboard;
export const folder = '/drive/'+ path[1].path;
export const clients = home + '/clients';

/* ------------------------------------------------------------------- */
/*                          Routes for nav
/* ------------------------------------------------------------------- */

const routes = [
  { link: home, title: 'Home'},
  {
    link: clients,
    title: 'Clients',
    children: [
      { link: clients + '/settings', title: 'Clients Settings' },
      { link: clients + '/:id', title: 'Client - ' },
  ] },
  { link: folder, title: 'Folder1' },
];

/* ------------------------------------------------------------------- */
/*                          Export routes
/* ------------------------------------------------------------------- */

export default routes;