/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        // const title = cy.title()
        // console.log(title)

        // cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        cy.title().should(title => {
            console.log(title)
        })

        //TODO imprimir o log no console
        //TODO escrever o log em um campo de texto
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        // cy.get('nao existe')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})