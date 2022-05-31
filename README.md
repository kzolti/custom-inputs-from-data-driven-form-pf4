# custom-inputs-from-data-driven-form-pf4
custom inputs from data-driven-form and patternfly4

example:
add property:
const _componentMapper = {
    ...componentMapper,
    "custom-password-input": PasswordInput,
};

add schema:
{
    component: "custom-password-input",
    name: "password",
    type: "password",
    label: t("password_again"),
    validate: [
      { type: "min-length", threshold: 3, message: t("min_3_char") },
      { type: "required", message: t("required_field") },
    ],
    isRequired: true,
},

add FormRenderer:
componentMapper={_componentMapper}
