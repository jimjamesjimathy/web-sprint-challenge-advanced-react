import { useState } from "react";

// write your custom hook here to control your checkout form
const useForm = (initialState) => {
    const [showSuccessMessage, setShowSuccessMessage ] = useState(false);
    const [values, setValues] = useState(initialState);

    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues(values);
        setShowSuccessMessage(!showSuccessMessage);
      };
    return [values, handleChanges, handleSubmit, showSuccessMessage, setShowSuccessMessage]
}

export default useForm;