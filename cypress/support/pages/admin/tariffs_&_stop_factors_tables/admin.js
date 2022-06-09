
/// <reference types="Cypress" />

//проба
//проба 2
import LeftMenu from "../../../locators/admin_locators/left_menu_locators"
import TariffsTableLocators from "../../../locators/admin_locators/banks_menu_item_locators/tariffsTable_locators"
import BanksList from "../../../locators/admin_locators/banks_menu_item_locators/banksList_locators"
import StopsTable from "../../../locators/admin_locators/banks_menu_item_locators/stopsTable_locators"
import CommonLocators from "../../../locators/admin_locators/banks_menu_item_locators/common_locators"

const leftMenu = new LeftMenu()
const stopsTable = new StopsTable()
const tariffsTable = new TariffsTableLocators()
const banksList = new BanksList()
const commonLocators = new CommonLocators()

class admin {

    constructor(admin) {this.admin = admin;}

    menuItemBanks() {
        return cy.get(leftMenu.banksItem)
    }

    tariffsTab() {
        return cy.get(tariffsTable.tariffsTab)
    }

    bankNameLink() {
        return cy.get(banksList.bankDerzhava)
    }

    stopsTableFrame() {
        return cy.get(stopsTable.stopTablesFrame, {timeout: 15000})
    }

    tariffsTableFrame() {
        return cy.get(tariffsTable.tariffsTableFrame, {timeout: 30000}) // таблица "Тарифы"
    }

    getAddConditionBtn() {
        return cy.get(commonLocators.addConditionBtn)
    }

    getClientTypeOOOIcon() {
        return cy.get(commonLocators.clientTypeOOOIcon) // колонка ОПФ - "ООО"
    }

    getBgTypeParticipateIcon() {
        return cy.get(commonLocators.bgTypeParticipateIcon)
    }

    getAdvanceIcon() {
        return cy.get(commonLocators.advanceIcon)
    }

    getAuctionsIcon() {
        return cy.get(commonLocators.auctionsIcon)
    }

    getLawIcon() {
        return cy.get(commonLocators.lawIcon)
    }

    getTariffInput() {
        return cy.get(tariffsTable.tariffInput)
    }

    getMinimumSumInput() {
        return cy.get(tariffsTable.minimumSumInput)
    }

    getClientAgeMonthsInput() {
        return cy.get(commonLocators.clientAgeMonthsInput)
    }

    getMinPeriodDaysInput() {
        return cy.get(commonLocators.minPeriodDaysInput)
    }

    getMaxPeriodDaysInput() {
        return cy.get(commonLocators.maxPeriodDaysInput)
    }

    getMinSumInput() {
        return cy.get(commonLocators.minSumInput)
    }

    getMaxSumInput() {
        return cy.get(commonLocators.maxSumInput)
    }

    getConfirmNewConditionBtnInTheLastCell() {
        return cy.get(commonLocators.confirmNewConditionBtnInTheLastCell, {timeout: 8000})
    }

    getActiveClientTypeOOOIcon() {
        return cy.get(commonLocators.activeClientTypeOOOIcon, {timeout: 15000})
    }

    getActiveBgTypeParticipateIcon() {
        return cy.get(commonLocators.activeBgTypeParticipateIcon)
    }

    getActiveAdvanceIcon() {
        return cy.get(commonLocators.activeAdvanceIcon)
    }

    getActiveAuctionsIcon() {
        return cy.get(commonLocators.activeAuctionsIcon)
    }

    getActiveLawIcon() {
        return cy.get(commonLocators.activeLawIcon)
    }

    getTariffValue() {
        return cy.get(tariffsTable.tariffValue) 
    }

    getMinimumSumValue() {
        return cy.get(tariffsTable.minimumSumValue) 
    }

    getClientAgeMonthsValue(time) {
        return cy.get(commonLocators.clientAgeMonthsValue, {timeout: time})
    }

    getMinPeriodDaysValue() {
        return cy.get(commonLocators.minPeriodDaysValue)
    }

    getMaxPeriodDaysValue() {
        return cy.get(commonLocators.maxPeriodDaysValue)
    }

    getMinSumValue() {
        return cy.get(commonLocators.minSumValue)
    }

    getMaxSumValue() {
        return cy.get(commonLocators.maxSumValue)
    }

    getClientTypeCellErrorInfo() {
        return cy.get(commonLocators.clientTypeCellErrorInfo)
    }

    getBgTypeCellErrorInfo() {
        return cy.get(commonLocators.bgTypeCellErrorInfo)
    }

    getBgTypePaymentErroInfo() {
        return cy.get(commonLocators.bgTypePaymentErroInfo, {timeout: 30000})
    }

    getAdvanceCellErrorInfo() {
        return cy.get(commonLocators.advanceCellErrorInfo)
    }

    getAuctionsCellErrorInfo() {
        return cy.get(commonLocators.auctionsCellErrorInfo)
    }

    getLawCellErrorInfo() {
        return cy.get(commonLocators.lawCellErrorInfo)
    }

    getMinSumCellErrorInfo() {
        return cy.get(commonLocators.minSumCellErrorInfo, {timeout: 30000})
    }

    getMaxSumCellErrorInfo() {
        return cy.get(commonLocators.maxSumCellErrorInfo, {timeout: 30000})
    }

    getCancelNewConditionBtn() {
        return cy.get(commonLocators.cancelNewConditionBtn)
    }
    
    getConfirmNewConditionBtn() {
        return cy.get(commonLocators.confirmNewConditionBtn)
    }

    getSaveBtn() {
        return cy.get(commonLocators.saveBtn)
    }

    getDisabledCancelAllChangesBtn() {
        return cy.get(commonLocators.disabledCancelAllChangesBtn, {timeout: 30000})
    }

    getCancelAllChangesBtn() {
        return cy.get(commonLocators.cancelAllChangesBtn, {timeout: 15000})
    }

    getSaveBtnModal() {
        return cy.get(commonLocators.saveBtnModal, {timeout: 15000})
    }

    getDeleteBtnModal() {
        return cy.get(commonLocators.deleteBtnModal, {timeout: 15000})
    }

    getDeleteBtn() {
        return cy.get(commonLocators.deleteBtn, {timeout: 15000})
    }

    getCopyConditionBtnLastRow() {
        return cy.get(commonLocators.copyConditionBtnLastRow)
    }

    getClientAgeMonthsValuePenultRow(time) {
        return cy.get(commonLocators.clientAgeMonthsValuePenultRow, {timeout: time})
    }





   
    


/* ---------------------------- М Е Т О Д Ы ------------------------------- */

    goToTheStopsTableOfTheDerzhavaBank() {
        // переход на ./admin/banks
        this.menuItemBanks().click() // клик на пункт -Банки- в левом меню админа
        // переход в банк 'Держава' и ожидание загрузки таблицы 'Стоп-факторы'
        this.bankNameLink().click() // клик по ссылке -Держава-
        this.stopsTableFrame().should('be.visible') // ожидание загрузки таблицы 'Стоп-факторы'
    }
    
    goToTheTariffsTableOfTheDerzhavaBank() {
        // переход на ./admin/banks
        this.menuItemBanks().click() // клик на пункт -Банки- в левом меню админа
        // переход в банк 'Держава' и ожидание загрузки таблицы 'Тарифы'
        this.bankNameLink().click() // клик по ссылке -Держава-
        this.tariffsTab().click() // клик по табу -Тарифы-
        this.tariffsTableFrame().should('be.visible') // ожидание загрузки таблицы 'Тарифы'
    }

    addANewTariff(tariff, minimumSum, clientAge, minPeriod, maxPeriod, minSum, maxSum) {
        this.getAddConditionBtn().click() // клик на кнопку |Добавить условие|
        this.getClientTypeOOOIcon().click() // клик на иконке -ООО- в колонке "ОПФ"
        this.getBgTypeParticipateIcon().click() // клик на иконке -на участие- в колонке "Типы БГ"
        this.getAdvanceIcon().click() // клик на иконке -Работает без авансирования- в колонке "Авансирование"
        this.getAuctionsIcon().click() // клик на иконке -Работает с закрытыми аукционами- в колонке "Аукционы"
        this.getLawIcon().click() // клик на иконке -44-ФЗ- в колонке "ФЗ"
        this.getTariffInput().type(tariff) // ввод данных в колонке "Тариф"
        this.getMinimumSumInput().type(minimumSum) // ввод данных в колонке "Минимальная сумма"
        this.getClientAgeMonthsInput().type(clientAge) // ввод данных в колонке "Мин. возраст клиента (мес.)"
        this.getMinPeriodDaysInput().type(minPeriod) // ввод данных в колонке "мин. период (день)"
        this.getMaxPeriodDaysInput().type(maxPeriod) // ввод данных в колонке "макс. период (день)"
        this.getMinSumInput().type(minSum) // ввод данных в колонке "мин. сумма (руб)"
        this.getMaxSumInput().type(maxSum) // ввод данных в колонке "макс. сумма (руб)"
        this.getConfirmNewConditionBtnInTheLastCell().click()

        // verification
        this.getActiveClientTypeOOOIcon().should('have.text', 'ООО') // проверка. наличие текста в колонке "ОПФ"
        this.getActiveBgTypeParticipateIcon().should('have.text', 'на участие') // проверка. наличие текста в колонке "Типы БГ"
        this.getActiveAdvanceIcon().should('have.text', 'Работает без авансирования') // проверка. наличие текста в колонке "Авансирование"
        this.getActiveAuctionsIcon().should('have.text', 'Работает с закрытыми аукционами')// проверка. наличие текста в колонке "Аукционы"
        this.getActiveLawIcon().should('have.text', '44-ФЗ') // проверка. наличие текста в колонке "ФЗ"
        this.getTariffValue().should('have.text', tariff) // проверка. наличие текста в колонке "Тариф"
        this.getMinimumSumValue().should('have.text', minimumSum) // проверка. наличие текста в колонке "Минимальная сумма"
        this.getClientAgeMonthsValue().should('have.text', clientAge) // проверка. наличие текста в колонке "Мин. возраст клиента (мес.)"
        this.getMinPeriodDaysValue().should('have.text', minPeriod) // проверка. наличие текста в колонке "мин. период (день)"
        this.getMaxPeriodDaysValue().should('have.text', maxPeriod) // проверка. наличие текста в колонке "макс. период (день)"
        this.getMinSumValue().should('have.text', minSum) // проверка. наличие текста в колонке "мин. сумма (руб)"
        this.getMaxSumValue().should('have.text', maxSum) // проверка. наличие текста в колонке "макс. сумма (руб)"
    }

    addANewStopFactor(clientAge, minPeriod, maxPeriod, minSum, maxSum) {
        this.getAddConditionBtn().click() // клик на кнопку |Добавить условие|
        this.getClientTypeOOOIcon().click() // клик на иконке -ООО- в колонке "ОПФ"
        this.getBgTypeParticipateIcon().click() // клик на иконке -на участие- в колонке "Типы БГ"
        this.getAdvanceIcon().click() // клик на иконке -Работает без авансирования- в колонке "Авансирование"
        this.getAuctionsIcon().click() // клик на иконке -Работает с закрытыми аукционами- в колонке "Аукционы"
        this.getLawIcon().click() // клик на иконке -44-ФЗ- в колонке "ФЗ"
        this.getClientAgeMonthsInput().type(clientAge) // ввод данных в колонке "Мин. возраст клиента (мес.)"
        this.getMinPeriodDaysInput().type(minPeriod) // ввод данных в колонке "мин. период (день)"
        this.getMaxPeriodDaysInput().type(maxPeriod) // ввод данных в колонке "макс. период (день)"
        this.getMinSumInput().type(minSum) // ввод данных в колонке "мин. сумма (руб)"
        this.getMaxSumInput().type(maxSum) // ввод данных в колонке "макс. сумма (руб)"
        this.getConfirmNewConditionBtnInTheLastCell().click()

        // verification
        this.getActiveClientTypeOOOIcon().should('have.text', 'ООО') // проверка. наличие текста в колонке "ОПФ"
        this.getActiveBgTypeParticipateIcon().should('have.text', 'на участие') // проверка. наличие текста в колонке "Типы БГ"
        this.getActiveAdvanceIcon().should('have.text', 'Работает без авансирования') // проверка. наличие текста в колонке "Авансирование"
        this.getActiveAuctionsIcon().should('have.text', 'Работает с закрытыми аукционами')// проверка. наличие текста в колонке "Аукционы"
        this.getActiveLawIcon().should('have.text', '44-ФЗ') // проверка. наличие текста в колонке "ФЗ"
        this.getClientAgeMonthsValue().should('have.text', clientAge) // проверка. наличие текста в колонке "Мин. возраст клиента (мес.)"
        this.getMinPeriodDaysValue().should('have.text', minPeriod) // проверка. наличие текста в колонке "мин. период (день)"
        this.getMaxPeriodDaysValue().should('have.text', maxPeriod) // проверка. наличие текста в колонке "макс. период (день)"
        this.getMinSumValue().should('have.text', minSum) // проверка. наличие текста в колонке "мин. сумма (руб)"
        this.getMaxSumValue().should('have.text', maxSum) // проверка. наличие текста в колонке "макс. сумма (руб)"
    }

    checkNewSFValues(clientAge, minPeriod, maxPeriod, minSum, maxSum) {
        this.getActiveClientTypeOOOIcon().should('have.text', 'ООО') // проверка. наличие текста в колонке "ОПФ"
        this.getActiveBgTypeParticipateIcon().should('have.text', 'на участие') // проверка. наличие текста в колонке "Типы БГ"
        this.getActiveAdvanceIcon().should('have.text', 'Работает без авансирования') // проверка. наличие текста в колонке "Авансирование"
        this.getActiveAuctionsIcon().should('have.text', 'Работает с закрытыми аукционами')// проверка. наличие текста в колонке "Аукционы"
        this.getActiveLawIcon().should('have.text', '44-ФЗ') // проверка. наличие текста в колонке "ФЗ"
        this.getClientAgeMonthsValue().should('have.text', clientAge) // проверка. наличие текста в колонке "Мин. возраст клиента (мес.)"
        this.getMinPeriodDaysValue().should('have.text', minPeriod) // проверка. наличие текста в колонке "мин. период (день)"
        this.getMaxPeriodDaysValue().should('have.text', maxPeriod) // проверка. наличие текста в колонке "макс. период (день)"
        this.getMinSumValue().should('have.text', minSum) // проверка. наличие текста в колонке "мин. сумма (руб)"
        this.getMaxSumValue().should('have.text', maxSum) // проверка. наличие текста в колонке "макс. сумма (руб)"
    }

    checkNewSFTextValuesNotHaveText(clientAge, minPeriod, maxPeriod, minSum, maxSum) {
        this.getClientAgeMonthsValue().should('not.have.text', clientAge) // проверка. наличие текста в колонке "Мин. возраст клиента (мес.)"
        this.getMinPeriodDaysValue().should('not.have.text', minPeriod) // проверка. наличие текста в колонке "мин. период (день)"
        this.getMaxPeriodDaysValue().should('not.have.text', maxPeriod) // проверка. наличие текста в колонке "макс. период (день)"
        this.getMinSumValue().should('not.have.text', minSum) // проверка. наличие текста в колонке "мин. сумма (руб)"
        this.getMaxSumValue().should('not.have.text', maxSum) // проверка. наличие текста в колонке "макс. сумма (руб)"

    }

    addTheEmptyCondition() {
        this.getAddConditionBtn().click()
        this.getConfirmNewConditionBtnInTheLastCell().click()
    }

    // проверка видимости знаков восклицания
    checkPresentTheErrorSigns() {
        let i = 0
        while (i < commonLocators.errorSignInTheColumnsWithIconArray.length) {
            cy.get(commonLocators.errorSignInTheColumnsWithIconArray[i]).scrollIntoView().should('be.visible')
            i++
        }
    }

    cancelAddingANewCondition() {
        this.getAddConditionBtn().click() // добавление нового условияю. клик на кнопке |Добавить новое условие|
        this.getCancelNewConditionBtn().click() // отмена добавления нового условияю. клик на кнопке |Отменить| в редакторе нового условия
        this.getConfirmNewConditionBtn().should('not.exist') // проверка. кнопка |Подтвердить|. в редакторе нового условия не существует, т.к. не существует и самого редактора 
    }

    cancelAllChanges() {
        this.getCancelAllChangesBtn().click() // закрытие редактора после проверки и удаление всех несохраненных в БД условий. клик на кнопку |Отменить все условия|
        this.getDeleteBtnModal().click()
    }
    
    copyCondition(clientAge, minPeriod, maxPeriod, minSum, maxSum) {
        this.addANewStopFactor(clientAge, minPeriod, maxPeriod, minSum, maxSum)
        this.getCopyConditionBtnLastRow().click()
        this.getConfirmNewConditionBtnInTheLastCell().click()
        
        this.getClientAgeMonthsValuePenultRow()
            .then(penaltRow => {
                const clientAgePenultRow = penaltRow.text()
                cy.wrap(clientAgePenultRow).as('clientAgePenultRow')
        })

        this.getClientAgeMonthsInput().should('not.exist')
            
        this.getClientAgeMonthsValue()
            .then(lastRow => {
                const clientAge = lastRow.text()
                cy.wrap(clientAge).as('clientAge')
            })
            
        cy.get('@clientAgePenultRow').then(clientAgePenultRow => {
            expect(clientAge).to.equal(clientAgePenultRow)
        })    
    }

    savingTheNewStopFactorToTheDB(
        tempClientAge, tempMinPeriod, tempMaxPeriod, tempMinSum, tempMaxSum,
        clientAge, minPeriod, maxPeriod, minSum, maxSum) {
            
        this.getSaveBtn().click() // клик на кнопку |Сохранить|
        this.getSaveBtnModal().click()
        this.getDisabledCancelAllChangesBtn().should('be.visible') // проверка. ждем, когда кнопка |Отменить все изменения| станет неактивна и станет виден ее задизейбленный вариант
        this.addANewStopFactor(tempClientAge, tempMinPeriod, tempMaxPeriod, tempMinSum, tempMaxSum)
        this.cancelAllChanges()
        this.checkNewSFValues(clientAge, minPeriod, maxPeriod, minSum, maxSum)
    }

    cancelNewSF(
        clientAge, minPeriod, maxPeriod, minSum, maxSum,
        tempClientAge, tempMinPeriod, tempMaxPeriod, tempMinSum, tempMaxSum,
        clientAge2, minPeriod2, maxPeriod2, minSum2, maxSum2,
        tempClientAge2, tempMinPeriod2, tempMaxPeriod2, tempMinSum2, tempMaxSum2) {

        this.addANewStopFactor(clientAge, minPeriod, maxPeriod, minSum, maxSum)
        this.addANewStopFactor(tempClientAge, tempMinPeriod, tempMaxPeriod, tempMinSum, tempMaxSum)
        this.cancelAllChanges()
        this.checkNewSFTextValuesNotHaveText(clientAge2, minPeriod2, maxPeriod2, minSum2, maxSum2)
        this.checkNewSFTextValuesNotHaveText(tempClientAge2, tempMinPeriod2, tempMaxPeriod2, tempMinSum2, tempMaxSum2)
    }

    clickSFIcon() {
        this.getClientTypeOOOIcon().click() // клик на иконке -ООО- в колонке "ОПФ"
        this.getBgTypeParticipateIcon().click() // клик на иконке -на участие- в колонке "Типы БГ"
        this.getAdvanceIcon().click() // клик на иконке -Работает без авансирования- в колонке "Авансирование"
        this.getAuctionsIcon().click() // клик на иконке -Работает с закрытыми аукционами- в колонке "Аукционы"
        this.getLawIcon().click() // клик на иконке -44-ФЗ- в колонке "ФЗ"
    }

    checkTheErrorMsgForTheBlankSumField() {
        this.getAddConditionBtn().click() // клик на кнопку |Добавить условие|
        this.clickSFIcon()
        this.getConfirmNewConditionBtnInTheLastCell().click() // клик на кнопку |Подтвердить| в редакторе добавления нового условия
        // проверка. в полях -мин. сумма (руб)- и -макс. сумма (руб)- появились сообщения об ошибке с тултипом "Значение должно быть не менее 0.1."
        this.getMinSumCellErrorInfo().should('be.visible')
        this.getMaxSumCellErrorInfo().should('be.visible')
    }

    deleteSavedSF(
        clientAge, minPeriod, maxPeriod, minSum, maxSum,
        tempClientAge, tempMinPeriod, tempMaxPeriod, tempMinSum, tempMaxSum,
        clientAge1, minPeriod1, maxPeriod1, minSum1, maxSum1,
        clientAge2, minPeriod2, maxPeriod2, minSum2, maxSum2
    ) 
    {
        this.addANewStopFactor(clientAge, minPeriod, maxPeriod, minSum, maxSum)

        this.savingTheNewStopFactorToTheDB(
            tempClientAge, tempMinPeriod, tempMaxPeriod, tempMinSum, tempMaxSum,
            clientAge1, minPeriod1, maxPeriod1, minSum1, maxSum1)

        this.getDeleteBtn().click()
        this.getSaveBtn().click() // клик на кнопку |Сохранить|

        this.getDeleteBtnModal().click()
        this.checkNewSFTextValuesNotHaveText(clientAge2, minPeriod2, maxPeriod2, minSum2, maxSum2)
    }
}

export default admin

// из tariffsTable_locators вынести tariffsTab в common_locators