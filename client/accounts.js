Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    },  {
        fieldName: 'city',
        fieldLabel: 'City',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your city of residence',
        data: [{
            id: 1,
            label: 'Bogota - Colombia',
            value: 'bog'
          }, {
            id: 2,
            label: 'Medellin - Colombia',
            value: 'med',
        }, {
            id: 3,
            label: 'Cali - Colombia',
            value: 'cli',
        }
        ],
        visible: true
    },
        {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});