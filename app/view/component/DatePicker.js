Ext.define("TheOpenDoor.view.component.DatePicker", {
    extend: "Ext.field.Text",
    xtype: "datepickerfield",
	config:{
			value:'',
			picker:'',
			readOnly:true,
			allowTap:true,
			listeners:{
				element:'element',
				tap:function(me, e, eOpts){
					if(this.getAllowTap()){
					 this.getPicker().showBy(this,'tr-br?');
					}
					
				}
				
			}
	},
    constructor: function (config) {

        var i,
            stringVal,
			dateArray=[],
			stringArray,
            datePicker = this,
			pickerCls=config.pickerCls,
			pickerHeight=config.pickerHeight;

        this.picker = Ext.create("Ext.Picker", {
            hidden: true,
            zIndex: 9999,
			cls:pickerCls,
			height:pickerHeight,
			useTitles: true,
			hideOnMaskTap:true,
			showAnimation:'',
			hideAnimation:'',
			id:'chooseLocationRoomListPicker',
    		slots : [{
	             name:'date',
	             store: Ext.getStore('GetSlotsStore'),
	             displayField: 'date',
	             valueField:'date',
	             align:'center',
	             title: 'Date'
    		}],

            listeners: {
				
				painted:function(){
					debugger;
					var value=datePicker.getValue();
					this.setValue(value);
				},
                change: function (picker, values) {
                	debugger;
					datePicker.setValue(values.date);
					var store=Ext.getStore('GetSlotsStore');
					var index=store.find('date',values.date);
					var data=store.getAt(index);
					var timeArray=data.getData().start_times
                }
            }
        });
		
		var viewportPicker=Ext.Viewport.add(this.picker); 
		config.picker=viewportPicker;
		var me=this;
        this.callParent(arguments);
    }
});