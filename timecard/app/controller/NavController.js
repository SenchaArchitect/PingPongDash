/*
 * File: app/controller/NavController.js
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

Ext.define('Timecard.controller.NavController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            navView: 'main',
            tabPanel: {
                autoCreate: true,
                selector: 'tabpanel',
                xtype: 'tabpanel'
            },
            punchInButton: 'punch #punchInButton',
            punchOutButton: 'punch #punchOutButton',
            punchTime: 'punch #punchTime',
            punchListButton: 'tabpanel #punchListButton'
        },

        control: {
            "main #employeeChooser": {
                itemtap: 'onEmployeeChoose'
            },
            "punch": {
                initialize: 'onPunchInitialize'
            },
            "punch #punchInButton": {
                tap: 'onPunchIn'
            },
            "punch #punchOutButton": {
                tap: 'onPunchOut'
            },
            "punchlist": {
                itemswipe: 'onPunchSwipe'
            }
        }
    },

    onEmployeeChoose: function(dataview, index, target, record, e, eOpts) {
        var name = record.get('name'),
            nav = this.getNavView(),
            tabPanel = this.getTabPanel({ title: name }),
            punches = Ext.StoreManager.get('punchesStore');
        
        this.employee = record;
        
        punches.removeAll();
        punches.load({
            params: {
                employeeId: record.get('employeeId')
            }
        });
        
        nav.push(tabPanel);
    },

    onPunchInitialize: function(component, eOpts) {
        this.getPunchOutButton().hide();
    },

    onPunchIn: function(button, e, eOpts) {
        var punchTimeLabel = this.getPunchTime();
        
        this.timeIn = new Date();
        var formattedStart = this.formatTime(this.punchIn);
        
        this.getPunchInButton().hide();
        this.getPunchOutButton().show();
        punchTimeLabel.show();
        
        var me = this;
        var updatePunchTimeLabel = function() {
            var now = new Date(),
                result;
            result = 'Punched in at ' + formattedStart + ' (' + me.timeAgo(me.punchIn) + ')';
            punchTimeLabel.setHtml(result);
        };
        updatePunchTimeLabel();
        this.punchTimeInterval = setInterval(updatePunchTimeLabel, 1000);
    },

    onPunchOut: function(button, e, eOpts) {
        var punch = Ext.create('Timecard.model.Punch'),
            store = Ext.StoreManager.get('punchesStore');
        
        this.getPunchInButton().show();
        this.getPunchOutButton().hide();
        this.getPunchTime().hide();
        
        clearInterval(this.punchTimeInterval);
        
        punch.set({
            employeeId: this.employee.get('employeeId'),
            timeIn: this.timeIn,
            timeOut: new Date()
        });
        
        store.add(punch);
    },

    onPunchSwipe: function(dataview, index, target, record, e, eOpts) {
        var title = 'Delete',
            message = 'Delete this punch?',
            messageBox = new Ext.MessageBox();
        
        messageBox.confirm(title, message, function(response) {
            if (response == 'yes') {
                var store = Ext.StoreManager.get('punchesStore');
                store.remove(record);
            }
        });
    },

    formatTime: function(d) {
        return moment(d).format('h:mma [on] D MMMM YYYY');
    },

    timeAgo: function(d) {
        return moment(d).fromNow();
    }

});