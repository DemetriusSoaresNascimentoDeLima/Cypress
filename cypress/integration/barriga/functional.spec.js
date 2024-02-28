/// <reference types="cypress" />

describe('Should test at a function level', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('.input-group > .form-control').type('test@cypress')
        cy.get(':nth-child(2) > .form-control').type('123456')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it('Should create an account', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta de teste')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso!')
    })
})