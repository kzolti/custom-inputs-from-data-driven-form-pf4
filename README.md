**This package has been deprecated !** 
# custom-inputs-from-data-driven-form-pf4

custom inputs from data-driven-form and patternfly4

## how to use custom-password-input in data-driven-forms:

<img src="https://github.com/kzolti/custom-inputs-from-data-driven-form-pf4/blob/main/pic/passwordInput.png?raw=true"></a>

yarn add custom-inputs-from-data-driven-form-pf4

myForm.js:

```
import { componentMapper } from "@data-driven-forms/pf4-component-mapper";
import PasswordInput from "custom-inputs-from-data-driven-form-pf4/inputs/PasswordInput";
...
```

add property:

```
const _componentMapper = {
  ...componentMapper,
  "custom-password-input": PasswordInput,
};
```

add form schema section:

```
const schema = {
  fields: [
    ...
    {
      component: "custom-password-input",
      name: "password",
      type: "password",
      label: t("password"),
      validate: [
        { type: "min-length", threshold: 8, message: t("min_8_char") },
        { type: "required", message: t("required_field") },
      ],
      isRequired: true,
    },
  ]
}
```

add FormRenderer props:

```
<FormRenderer
  schema={schema}
  componentMapper={_componentMapper}
 ...
>
```
