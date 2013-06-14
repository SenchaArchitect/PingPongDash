/*
 * File: app/store/EmployeesStore.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Fulfill.store.EmployeesStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Fulfill.model.Employee'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        data: [
            {
                employeeId: 1,
                name: 'Ron Burgundy',
                title: 'CEO'
            },
            {
                employeeId: 2,
                name: 'Brian Fantana',
                title: 'Inventory manager'
            },
            {
                employeeId: 3,
                name: 'Champ Kind',
                title: 'Associate'
            },
            {
                employeeId: 4,
                name: 'Brick Tamland',
                title: 'Associate'
            }
        ],
        model: 'Fulfill.model.Employee',
        storeId: 'employeesStore',
        proxy: {
            type: 'direct',
            api: {
                create: 'Fulfill.ss.DXEmployees.createEmployee',
                read: 'Fulfill.ss.DXEmployees.getEmployees',
                update: 'Fulfill.ss.DXEmployees.updateEmployee',
                destroy: 'Fulfill.ss.DXEmployees.destroyEmployee'
            },
            reader: {
                type: 'json'
            },
            writer: {
                type: 'json'
            }
        }
    }
});