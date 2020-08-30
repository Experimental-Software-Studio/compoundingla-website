const submit = (type, data) => {
    let url = '', template;
    switch(type){
        case 'compounding':
            template = `name: ${data.fname} ${data.lname}%0D%0Acontact email: ${data.email}%0D%0Aphone number: ${data.phone}%0D%0Aprescription: ${data.prescription} `;
            url = `mailto:order@compoundingla.com?subject=contact&body=${template}`;
            console.log(data.files);
            break;
        case 'refill':
            template = `name: ${data.fname} ${data.lname}%0D%0Acontact email: ${data.email}%0D%0Aphone number: ${data.phone}%0D%0Aprescription number: ${data.prescription} `;
            url = `mailto:order@compoundingla.com?subject=refill&body=${template}`;
            console.log(url)
            break;
        case 'testing':
            template = `name: ${data.fname} ${data.lname}%0D%0Acontact email: ${data.email}%0D%0Atest type: ${data.type}`;
            url = `mailto:order@compoundingla.com?subject=testing&body=${template}`;
            break;
        default:
            break;
    }
    window.open(url);
}

export default submit;