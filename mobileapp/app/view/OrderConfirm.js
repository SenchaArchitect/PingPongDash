/*
 * File: app/view/OrderConfirm.js
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

Ext.define('Fulfill.view.OrderConfirm', {
    extend: 'Ext.Container',
    alias: 'widget.orderconfirm',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        cls: 'band',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            '<div class="customerCt">',
            '    <h1>{name}</h1>',
            '    <div class="address"><a href="http://maps.apple.com/?q={address},{city}, {state} {zip}">{address}<br/>{city}, {state} {zip}</a></div>',
            '    <tpl if="phone">',
            '	    <div class="phone">Phone <a href="tel:{phone}">{phone}</a></div>',
            '    </tpl>',
            '    <tpl if="fax">',
            '	    <div class="fax">Fax: {fax}</div>',
            '    </tpl>',
            '</div>',
            '',
            '<div class="packedItemsCt">',
            '    <p>Please confirm these items have been packaged.</p>',
            '    <ul class="packedItems">',
            '        <tpl for="packedItems">',
            '            <li style="list-style-type: none;"><span class="quantity-ordered-details packed">{quantityOrdered}</span> <span class="item-name-details">{name}</span> <span class="item-id-details">{itemId}</span></li>',
            '        </tpl>',
            '    </ul>',
            '</div>',
            '',
            '<tpl if="unpackedItems.length">',
            '    <div class="unpackedItemsCt">',
            '        <p>Please confirm these items are not yet available for shipping.</p>',
            '        <ul class="unpackedItems">',
            '            <tpl for="unpackedItems">',
            '                <li style="list-style-type: none;"><span class="quantity-ordered-details unpacked">{quantityOrdered}</span> <span class="item-name-details">{name}</span> <span class="item-id-details">{itemId}</span></li>',
            '            </tpl>',
            '        </ul>',
            '    </div>',
            '</tpl>',
            '',
            '<tpl if="shippedItems.length">',
            '    <div class="shippedItemsCt">    ',
            '        <p>These items have already shipped.</p>',
            '        <ul class="shippedItems">',
            '            <tpl for="shippedItems">',
            '                <li style="list-style-type: none;"><span class="quantity-ordered-details shipped">{quantityOrdered}</span> <span class="item-name-details">{name}</span> <span class="item-id-details">{itemId}</span></li>',
            '            </tpl>',
            '        </ul>',
            '    </div>',
            '</tpl>'
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'bottom',
                layout: {
                    pack: 'end',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'mybutton3',
                        ui: 'confirm',
                        text: 'Confirm Shipment'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMybutton3Tap',
                event: 'tap',
                delegate: '#mybutton3'
            }
        ]
    },

    onMybutton3Tap: function(button, e, eOpts) {
        this.fireEvent('confirmtap');
    }

});