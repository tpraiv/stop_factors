/// <reference types = 'cypress' />

import { AddStatementsPage } from "../../../support/pages/admin/add_statements_page"
import { LoginPage } from "../../../support/pages/base/login_page"

describe('Statements Page', () => {
    const loginPage = new LoginPage()
    const addStatementsPage = new AddStatementsPage()

    beforeEach('', () => {
        loginPage.loginWithoutECP('admin', '123456')
    })

    it('can search the bank via the search field', {defaultCommandTimeout: 25000}, () => {
        addStatementsPage.goToTheStatementsSection()
        addStatementsPage.statementSearch(120140)
        addStatementsPage.bankSearchUsingTheSearchFieldInTheSelect('Альфа-Банк')
        cy.reload()
        addStatementsPage.statementSearch(120140)
        addStatementsPage.addingANonExistingBank('йёЪь')
    })

    it('can see the info block', {defaultCommandTimeout: 25000}, () => {
        addStatementsPage.goToTheStatementsSection()
        addStatementsPage.statementSearch(120140)
        addStatementsPage.checkingTheVisibilityOfTheBlockWithInformatiAboutStatement()
    })

    it('can see no available bank message', {defaultCommandTimeout: 25000}, () => {
        addStatementsPage.goToTheStatementsSection()
        addStatementsPage.statementSearch(120143)
        addStatementsPage.checkingTheVisibilityOfTheBlockWithInformatiAboutStatement()
        addStatementsPage.confirmsThePresenceOfAMessageAboutTheAbsenceAvailableBanks()
    })

    it('can add all available banks', {defaultCommandTimeout: 30000}, () => {
        addStatementsPage.goToTheStatementsSection()
        addStatementsPage.statementSearch(120140)
        addStatementsPage.addingBanksNameFromSelectToArray()
        addStatementsPage.addingAllAvailableBanks()
        addStatementsPage.goToTheStatementInTheUserAccount(120140)
        addStatementsPage.deletingAddedBanksFromTheClientsPersonalAccount()
    })
})