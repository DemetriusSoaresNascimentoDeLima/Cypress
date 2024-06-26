/// <reference types="cypress" />

describe('Should test at a function level', () => {
    let token

    before(() => {
        cy.login('test@cypress', '123456')
            .then(tkn => {
                token = tkn
            })
    })

    beforeEach(() => {
        // cy.get(loc.MENU.HOME).click()
        // cy.resetApp()
    })

    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            url: 'https://barrigarest.wcaquino.me/contas',
            body: {
                nome: "Conta via rest"
            }
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via rest')
        })
    })

    it('Should update an account', () => {

    })

    it('Should not create an account with same name', () => {

    })

    it('Should create a transaction', () => {

    })

    it('Should get balance', () => {

    })

    it('Should remove a transaction', () => {

    })
})