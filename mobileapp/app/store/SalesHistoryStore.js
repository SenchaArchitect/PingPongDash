/*
 * File: app/store/SalesHistoryStore.js
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

Ext.define('Fulfill.store.SalesHistoryStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Fulfill.DirectAPI',
        'Ext.data.proxy.Direct',
        'Ext.data.reader.Json',
        'Ext.data.Field',
        'Ext.util.Sorter'
    ],

    config: {
        storeId: 'salesHistoryStore',
        proxy: {
            type: 'direct',
            directFn: 'Fulfill.ss.DXOrders.getSalesHistoryData',
            paramOrder: 'category',
            reader: {
                type: 'json'
            }
        },
        fields: [
            {
                dateFormat: 'Y-m-d',
                name: 'totaledOrderDate',
                type: 'date'
            },
            {
                name: 'SMB',
                type: 'float'
            },
            {
                name: 'Team',
                type: 'float'
            },
            {
                name: 'Individual',
                type: 'float'
            },
            {
                name: 'Enterprise',
                type: 'float'
            }
        ],
        sorters: {
            property: 'totaledOrderDate'
        }
    }
});