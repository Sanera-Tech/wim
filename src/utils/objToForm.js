export const objectToFormData = async (obj, form, namespace) => {
    let fd = form || new FormData();
    let formKey;

    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (namespace) {
                formKey = `${namespace}[${property}]`;
            } else {
                formKey = property;
            }

            // If the property is an object, use recursion.
            if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                objectToFormData(obj[property], fd, formKey);
            } else {
                fd.append(formKey, obj[property]);
            }
        }
    }

    return fd;
}