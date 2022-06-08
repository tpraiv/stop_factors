
/// <reference types="Cypress" />

import Login from '../../../pageObjects/login'
import Admin from '../../../pageObjects/admin/banks_menu_item/admin'
import RequiredData from '../../../pageObjects/admin/banks_menu_item/required_data'
import AdminRequiredData from '../../../pageObjects/admin/required_data'

const login = new Login()
const admin = new Admin()
const requiredData = new RequiredData()
const adminRequiredData = new AdminRequiredData()


describe('Таблица "Cтоп-факторы"', () => {
    beforeEach(() => {
        login.loginWithoutECP(...adminRequiredData.arrayAdminLoginData)
        admin.goToTheStopsTableOfTheDerzhavaBank()
    })

    it('добавление нового условия с подтверждением, но без сохранения в БД', () => {
        admin.addANewStopFactor(...requiredData.arrayForTheStopFactorsTableData)
    })

    it('отмена при добавлении нового условия', () => {
        admin.cancelAddingANewCondition()
    })

    it('вывод "!" в колонках', () => {
        admin.addTheEmptyCondition()
        admin.checkPresentTheErrorSigns()
    })

    it('сохранение нового условия в БД', () => {
        admin.addANewStopFactor(...requiredData.arrayForTheStopFactorsTableData)
        admin.savingTheNewStopFactorToTheDB(...requiredData.secondArray, ...requiredData.arrayForTheStopFactorsTableData)
    })

    it('отмена добавленного условия', () => {
        admin.cancelNewSF(
            ...requiredData.cancelNewSFArray,
            ...requiredData.secondArray,
            ...requiredData.secondArray,
            ...requiredData.cancelNewSFArray
        )
        // подумать как передавать в него уникальные для
        // каждого теста данные. например, в поле "мин. период" даже в одном этом тесте вводятся два разных значения,
        // подумать, как организовать передачу уникальных данных.
    })

    it('вывод ошибки при подтверждении условия с незаполненными полями суммы', () => {
        admin.checkTheErrorMsgForTheBlankSumField()
    })

    
    it('удаление сохраненного в БД условия', () => {
        admin.deleteSavedSF(
            ...requiredData.deleteSavedSFArray,
            ...requiredData.secondArray,
            ...requiredData.deleteSavedSFArray,
            ...requiredData.deleteSavedSFArray)
    })

    it.only('копирование существующего условия', { defaultCommandTimeout: 10000 }, () => {
        admin.copyCondition(...requiredData.arrayForTheCopyStopFactorData)
    })

/*
    it('test', () => {
        cy.visit('http://bankon.local/login')
        
        cy.get('div[data-target="#loginAuthMethod"] span').then(article => {
            const value = article.text();
            cy.get('div[data-target="#loginAuthMethod"]')
            .click()
            .get('input[name="login"]')
            .type(value)
        })
    })

    it('test', () => {
        cy.visit('http://bankon.local/login')
            .get(".header a[href='http://bankon.local/signup']").then(message => {
                let wags = message.text()
                cy.wrap(wags).as('wags')
            })
        cy.get('div[data-target="#loginAuthMethod"]')
        .click()
        .get('@wags').then(wags => {
            cy.get('input[name="login"]')
                .type(wags)
        })
})

    it('test2', () => {
        cy.visit('http://bankon.local/login')

        
        cy.get(".header a[href='http://bankon.local/signup']").then(message => {
            const lateAge = message.text()
            cy.get(".header a[href='http://bankon.local/signup']").then(message1 => {
            const age = message1.text()
            expect(lateAge).to.equal(age)
            })
        })
    })

    it.only('получение в разных блоках текста трех элементов. их сравнение в отдельном блоке (во вне) с использованием алиасов ', () => {
        cy.visit('http://bankon.local/login')

        
        cy.get(".header a[href='http://bankon.local/signup']").then(message => {
            const lateAge = message.text()
            cy.wrap(lateAge).as('lateAge')
        })
                
        cy.get(".header a[href='http://bankon.local/signup']").then(message1 => {
            const age = message1.text()
            cy.wrap(age).as('age')
            })

        cy.get(".header a[href='http://bankon.local/signup']").then(message3 => {
            const age3 = message3.text()
            cy.wrap(age3).as('age3')
        })

        cy.get('@lateAge').then(lateAge => {
            cy.get('@age').then(age => {
                cy.get('@age3').then(age3 => {
                    expect(lateAge).to.equal(age3).to.equal(age)
                })
            })
        })
    })*/
})




/*
добавить в начало файла переменные для передачи уникальных данных в каждый тест, таких как, суммы, период, возраст.
*/

