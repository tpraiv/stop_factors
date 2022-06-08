export class AdminBasePage {

    statementsItemLinkSelector = "li[title='Заявки']"
    getStatementsItemLink = () => cy.contains('Заявки')
}