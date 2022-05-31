import React, { useState} from "react";
import { withTranslation } from "react-i18next";
import { EyeIcon, EyeSlashIcon, ExclamationCircleIcon } from "@patternfly/react-icons";
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";

import { Button, FormGroup, InputGroup, TextInput} from "@patternfly/react-core";

const PasswordInput = (props) => {
    const { customProp, label, input, isRequired, meta, FieldArrayProvider, dataType, ...rest } = useFieldApi(props);
    const [visiblePasword, setVisiblePasword] = useState(false);

    return (
        <FormGroup
            label={props.t(label)}
            isRequired={isRequired}
            fieldId={input.name}
            helperTextInvalid={meta.error}
            helperTextInvalidIcon={<ExclamationCircleIcon />}
            validated={meta.valid ? "default" : "error"}
        >
            <InputGroup>
                <TextInput
                    {...input}
                    validated={meta.valid ? "default" : "error"}
                    type={visiblePasword ? "text" : "password"}
                    id={input.name}
                />
                <Button variant='control' onClick={() => setVisiblePasword(!visiblePasword)}>
                    {visiblePasword ? <EyeSlashIcon /> : <EyeIcon />}
                </Button>
            </InputGroup>
        </FormGroup>
    );
};
export default withTranslation()(PasswordInput);
