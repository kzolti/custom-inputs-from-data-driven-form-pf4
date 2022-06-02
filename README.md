# custom-inputs-from-data-driven-form-pf4
custom inputs from data-driven-form and patternfly4

## howto use custom-password-input in data-driven-forms:
yarn add custom-inputs-from-data-driven-form-pf4
myForm.js
```
import { componentMapper } from "@data-driven-forms/pf4-component-mapper";
import PasswordInput from "custom-inputs-from-data-driven-form-pf4/inputs/PasswordInput";
...
```
add form property:
```
const _componentMapper = {
    ...componentMapper,
    "custom-password-input": PasswordInput,
};
```

add form schema section:
```
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
```

add FormRenderer props:
```
<FormRenderer
  schema={schema}
  componentMapper={_componentMapper}
 ...
>
```
