/*
 * File: app/store/PeriodTotals.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Orders.store.PeriodTotals', {
    extend: 'Ext.data.Store',

    requires: [
        'Orders.model.PeriodTotal'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'Orders.model.PeriodTotal',
            storeId: 'PeriodTotals',
            proxy: {
                type: 'direct',
                directFn: Fulfill.ss.DXCustomers.getCustomerDetail,
                paramOrder: 'customerId',
                reader: {
                    type: 'json',
                    root: 'perPeriodTotals'
                }
            }
        }, cfg)]);
    }
});