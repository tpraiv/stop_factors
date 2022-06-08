/// <reference types="Cypress" /> 

import Login from '../../../pageObjects/login'
import Admin from '../../../pageObjects/admin/banks_menu_item/admin'
import RequiredData from '../../../pageObjects/admin/banks_menu_item/required_data'
import AdminRequiredData from '../../../pageObjects/admin/required_data'

const admin = new Admin()
const login = new Login()
const requiredData = new RequiredData()
const adminRequiredData = new AdminRequiredData()


describe('Таблица "Тарифы"', () => {
    beforeEach(() => {
        login.loginWithoutECP(...adminRequiredData.arrayAdminLoginData)
        admin.goToTheTariffsTableOfTheDerzhavaBank()
    })

    it('добавление нового тарифа. Без сохранения в БД', () => {
        admin.addANewTariff(...requiredData.arrayForTheTariffsTableData) /* '...' - это аргумент распространения. здесь для того, чтобы массив можно было передать, как параметр.*/
    })

    it('отмена добавления нового тарифа', () => {
        admin.cancelAddingANewCondition()
    })

    it('вывод "!" в колонках', () => {
        admin.addTheEmptyCondition()
        admin.checkPresentTheErrorSigns()
    })
})