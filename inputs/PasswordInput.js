import React, { useState } from "react";

import { EyeIcon, EyeSlashIcon, ExclamationCircleIcon } from "@patternfly/react-icons";
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";

import { Button, FormGroup, InputGroup, TextInput } from "@patternfly/react-core";

const PasswordInput = (props) => {
    const { customProp, label, input, isRequired, meta, FieldArrayProvider, dataType, ...rest } = useFieldApi(props);
    const [visiblePasword, setVisiblePasword] = useState(false);
    const text_input = React.createElement(TextInput, {
        key:1,
        autocomplete: "off",
        ...input,
        validated: meta.touched && !meta.valid ? "error" : "default",
        id: input.name,
        type: visiblePasword ? "text" : "password",
        
    });
    const eye_slash_icon = React.createElement(EyeSlashIcon, null);
    const eye_icon = React.createElement(EyeIcon, null);
    const button = React.createElement(
        Button,
        { variant: "control", tabIndex: -1, onClick: () => setVisiblePasword(!visiblePasword), key:2 },
        visiblePasword ? eye_slash_icon : eye_icon
    );
    const input_group = React.createElement(InputGroup, null, [text_input, button]);
    return React.createElement(
        FormGroup,
        {
            label: label,
            isRequired: isRequired,
            fieldId: input.name,
            helperTextInvalid: meta.error,
            helperTextInvalidIcon: React.createElement(ExclamationCircleIcon),
            validated: meta.touched && !meta.valid ? "error" : "default",
        },
        input_group
    );
};
export default PasswordInput;
