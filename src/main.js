import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap';
import './style.css';

// Marca el link activo del navbar segun la pagina actual
const actual = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar .nav-link').forEach((a) => {
    if (a.getAttribute('href') === actual) a.classList.add('active');
});

// Validacion de Bootstrap en el formulario de contacto
document.querySelectorAll('.needs-validation').forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('was-validated');
        if (form.checkValidity()) {
            form.reset();
            form.classList.remove('was-validated');
            document.querySelector('#exito')?.classList.remove('d-none');
        }
    });
});
