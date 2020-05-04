export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb0900cf08678e4c50cfaa7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-erkz15d5',
                  apiId: '0706dc0a-0e4b-4aa8-a902-289aeab1b7d5'
                },
                {
                  buildHookId: '5eb0900c110bd4ee62bb5a7f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9zpr9rs2',
                  apiId: '22442f6b-fb33-45ed-84ee-0369186300c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ghandisambi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9zpr9rs2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
