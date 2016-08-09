### Form Builder
#### Component
1. Import `FormBuilder` and `Validators` from `angular2/common`
2. Inject an instance of `FormBuilder` into the constructor
3. A form is just a control group, so we create the form by calling `builderInstance.group`
4. We pass in an object with one or more controls or control groups...we can nest it however we like
5. A control has the name of the control as the key, and the value is an array in the form of `[initialValue, validator(s)]`
6. If we want to use multiple validators, we call `Validators.compose`, passing in an array with all the validators we need

#### Template
1. Add an `ngFormModel` directive to the form element and bind it to the form we created in the component
2. Everything else stays the same except we do not need to put our validators directly on the input elements...we have them defined in the component already