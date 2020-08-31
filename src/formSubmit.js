import Swal from 'sweetalert2';

const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            Swal.fire('Success!', 'We have received your email and will get back to you', 'success');
        } else {
            Swal.fire('Error!', 'Something went wrong... You can try again or contact us directly. ', 'error');
        }
    };
    xhr.send(data);
}

export default submit;