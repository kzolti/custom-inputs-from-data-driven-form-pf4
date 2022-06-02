import React, { useState } from "react";

import { EyeIcon, EyeSlashIcon, ExclamationCircleIcon } from "@patternfly/react-icons";
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";

import { Button, FormGroup, InputGroup, TextInput } from "@patternfly/react-core";

const PasswordInput = (props) => {
    const { customProp, label, input, isRequired, meta, FieldArrayProvider, dataType, ...rest } = useFieldApi(props);
    const [visiblePasword, setVisiblePasword] = useState(false);
    const text_input = React.createElement(TextInput, {
        ...input,
        validated: meta.valid ? "default" : "error",
        id: input.name,
        type: visiblePasword ? "text" : "password",
        key:1
    });
    const eye_slash_icon = React.createElement(EyeSlashIcon, null);
    const eye_icon = React.createElement(EyeIcon, null);
    const button = React.createElement(
        Button,
        { variant: "control", onClick: () => setVisiblePasword(!visiblePasword), key:2 },
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
            validated: meta.valid ? "default" : "error",
        },
        input_group
    );
};
export default PasswordInput;
