context('Cypress Sample Spec', () => {
  beforeEach(() => {
    cy.visit('http://trial-dirigible.ingress.aws.promart.shoot.canary.k8s-hana.ondemand.com/')
  })
	
  it('Search Dirigible on Google', () => {
    cy.get('form').find('[type="text"]').type('dirigible')
	
	cy.get('form').find('[type="submit"]').click()
	
	cy.url().should('include', '/services/v4/web/ide/')
  })
})
