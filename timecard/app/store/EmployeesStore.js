/*
 * File: app/store/EmployeesStore.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Timecard.store.EmployeesStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Timecard.model.Employee',
        'Timecard.DirectAPI',
        'Ext.data.proxy.Direct',
        'Ext.data.reader.Json'
    ],

    config: {
        autoLoad: true,
        model: 'Timecard.model.Employee',
        storeId: 'employeesStore',
        proxy: {
            type: 'direct',
            directFn: 'Fulfill.ss.DXEmployees.getEmployees',
            reader: {
                type: 'json'
            }
        }
    }
});