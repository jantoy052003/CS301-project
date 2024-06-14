import { useState } from "react";

export const useToggleForm = () => {
    const [showForm, setShowForm] = useState('hidden')

    // show
    const showUploadImageForm = () => {
        setShowForm(showForm === 'hidden' && 'block')
    }

    //hide
    const hideUploadImageForm = () => {
        setShowForm(showForm === 'block' && 'hidden')
    }

    return [showForm, setShowForm, showUploadImageForm, hideUploadImageForm]
}