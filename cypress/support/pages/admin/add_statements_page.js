import { AdminBasePage } from "./admin_base_page"

const adminBasePage = new AdminBasePage()

export class AddStatementsPage {

    getStatementsPageTitle = () => cy.contains('Редактирование заявки')
    getStatementsNumberInput = () => cy.get("input[type='number']")
    getSearchBtn = () => cy.contains('Найти')
    getAddBankBlockTitle = (time) => cy.contains('Добавление банка', { timeout: time })
    getTheAddedBanksCounter = () => cy.contains('Всего заявок:')
    getTheAddBankSelect = () => cy.get('.select2-chosen')
    getTheSearchBanksField = (time) => cy.get('.select2-input', { timeout: time })
    getAddBtn = () => cy.contains('Добавить')
    getNoResultsStringInTheSelect = () => cy.contains('No matches found')

    goToTheStatementsSection = () => {
        adminBasePage.getStatementsItemLink().click()
        this.getStatementsPageTitle().should('be.visible')
    }

    statementSearch = (stmtNumber) => {
        this.getStatementsNumberInput().type(stmtNumber)
        this.getSearchBtn().click()
        this.getAddBankBlockTitle().should('be.visible')
    }

    goToTheStatementInTheUserAccount = (stmtNumber) => {
        cy.visit('http://bankon.local/admin/login-as')
        cy.get('input[name=login]').type('rnapsnabooo{enter}')
        cy.contains('БАНКОВСКИЕ ГАРАНТИИ').click()
        cy.contains(stmtNumber).click()
    }

    bankSearchUsingTheSearchFieldInTheSelect = (bank) => {
        this.getTheAddBankSelect().click()
        this.getTheSearchBanksField().type(`${bank}{enter}`)
        this.getTheAddBankSelect().should('contain.text', bank)
    }

    addingANonExistingBank = (bank) => {
        this.getTheAddBankSelect().click()
        this.getTheSearchBanksField().type(`${bank}{enter}`)
        this.getNoResultsStringInTheSelect().should('be.visible')
        cy.get('.add-bank button[disabled="disabled"]').should('exist')
    }

    checkingTheVisibilityOfTheBlockWithInformatiAboutStatement = () => {
        cy.get('div.stmt-info')
            .should('contain.text', 'Продукт:')
            .should('contain.text', 'Закон:')
    }

    confirmsThePresenceOfAMessageAboutTheAbsenceAvailableBanks = () => {
        cy.get('.add-bank p').should('contain.text', 'Нет доступных банков для добавления')
    }

    gettingAndChangingTheValueOfTheCounterOfAddedBanks = () => {
        cy.get('.block .add-bank-title span').then(counter => {
            let textCounter = counter.text()
            let arr = textCounter.split(' ')
            let lastItem = arr.slice(-1)
            let parsed = parseInt(lastItem, 10)
            let beforeStr = `Всего заявок: ${parsed}`
            let newNum = parsed + 1
            let afterStr = `Всего заявок: ${newNum}`
            cy.wrap(beforeStr).as('beforeStr')
            cy.wrap(afterStr).as('afterStr')
        })
    }

    addingBanksNameFromSelectToArray = () => {
        let addBanksName = []
        cy.get('.select2-choice').as('dropdown').click()
        cy.get('.select2-results li').as('li').each(($li) => {
            addBanksName.push($li.text())
        })
        cy.wrap(addBanksName).as('addedBanksNameArray')
    }
    
    addingAllAvailableBanks = () => {
        cy.get('@addedBanksNameArray').then(addedBanksNameArray => {
            addedBanksNameArray.forEach(bank => {
                cy.log(addedBanksNameArray)
                this.gettingAndChangingTheValueOfTheCounterOfAddedBanks()
                cy.get('@beforeStr').then(beforeStr => {
                    this.getTheAddedBanksCounter().should('have.text', beforeStr)
                })
                cy.get('body').type('{esc}')
                this.getTheAddBankSelect().click()
                cy.get('.select2-results').as('ul')
                    .contains(bank)
                    .click()
                this.getAddBtn().click()
                this.getTheSearchBanksField().should('be.empty')
                cy.get('@afterStr').then(afterStr => {
                    this.getTheAddedBanksCounter().should('have.text', afterStr)
                })
                cy.get('section > div:last-child .block-body').then(body => {
                    if (body.find('input').length) {
                        this.getTheAddBankSelect().click()
                        cy.get('@ul')
                            .contains(bank)
                            .should('not.exist')
                    } else {
                        cy.get('.add-bank p').should('have.text', 'Нет доступных банков для добавления')
                    }
                })
            })
        })
    }

    removalOfTheHashSymbolFromTheNameOfTheBank = () => {
        let addedBanksNameWithoutHashSymbol = []
        cy.get('@addedBanksNameArray').then(addedBanksNameArray => {
            addedBanksNameArray.forEach(item => {
                let a = item.split(' #')[0]
                addedBanksNameWithoutHashSymbol.push(a)
            })
            cy.wrap(addedBanksNameWithoutHashSymbol).as('addedBanksNameWithoutHashSymbol')
        })
    }

    deletingAddedBanksFromTheClientsPersonalAccount = () => {
        this.removalOfTheHashSymbolFromTheNameOfTheBank()
        cy.get('@addedBanksNameWithoutHashSymbol').then(addedBanksNameWithoutHashSymbol => {
            let namesOfAddedBanksWithQuotes = []
            for (let i = 0; i < addedBanksNameWithoutHashSymbol.length; i++) {
                const bankNameWithQuotes = addedBanksNameWithoutHashSymbol[i].split(addedBanksNameWithoutHashSymbol[i]).join('«' +addedBanksNameWithoutHashSymbol[i]+ '»')
                namesOfAddedBanksWithQuotes.push(bankNameWithQuotes)
            }
            let namesOfAddedBanksOnTilesArray = []
            cy.get('.block-body .row.jsTilesView > div a .stmt-info span span').each(($name) => {
                let nameOnTiles = $name.text()
                namesOfAddedBanksOnTilesArray.push(nameOnTiles)
            })
            cy.wrap(namesOfAddedBanksOnTilesArray).as('namesOfAddedBanksOnTilesArray')
            cy.get('@namesOfAddedBanksOnTilesArray').then(namesOfAddedBanksOnTilesArray => {
                for (let i = 0; i < namesOfAddedBanksWithQuotes.length; i++) {
                    for (let j = 0; j < namesOfAddedBanksOnTilesArray.length; j++) {
                        if (namesOfAddedBanksWithQuotes[i] === namesOfAddedBanksOnTilesArray[j]) {
                            cy.xpath
                            (".//div[@class='block-body']//div[@class='panel-heading stmt-info']//span/span[text()='"+namesOfAddedBanksOnTilesArray[j]+"']/../../../../../div[@class='panel-after btn-stb-remove pointer']/span")
                              .click()
                        }
                    }
                }
            })
        })
    }
}
