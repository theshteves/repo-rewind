describe('Test h1 in every page', () => {
  it('Find h1 in each page', () => {
    cy.request('/sitemap/sitemap-0.xml').then((res) => {
      const parser = new DOMParser()
      const xml = parser.parseFromString(res.body, 'text/xml')
      // console.log(res.body)

      const pages = [...xml.getElementsByTagName('loc')].map((e) => e.innerHTML)

      pages.forEach((page) => {
        console.log(page)
        cy.visit(page)
        cy.get('h1')
      })
    })
  })
})
