/// <reference types="cypress" />

describe('Should test at a function level', () => {
    before(() => {
        // cy.login('test@cypress', '123456')
    })
    
    beforeEach(() => {
        // cy.get(loc.MENU.HOME).click()
        // cy.resetApp()
    })

    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: "test@cypress",
                redirecionar: false,
                senha: "123456"
            }
        }).then(res => console.log(res))
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