

export const path= [{path:'main-page'},{path:'folder-format'}];
export const dashboard = '/drive/'+path[0].path;
export const home = dashboard;
// export const folder = '/drive/'+ path[1].path;
export const folders = '/drive/'+ path[1].path;

/* ------------------------------------------------------------------- */
/*                          Routes for nav
/* ------------------------------------------------------------------- */

const routes = [
  { link: home, title: 'Home'},
  {
    link: folders ,
    title: 'Folder1',
    children: [
      { link: folders  + '/settings', title: 'Clients Settings' },
      { link: folders  + '/:id', title: 'Client - ' },
  ] },
  // { link: folder, title: 'Folder1' },
];

/* ------------------------------------------------------------------- */
/*                          Export routes
/* ------------------------------------------------------------------- */

export default routes;