// Año dinámico en footer
document.getElementById('year').textContent = new Date().getFullYear();

// FAQ toggle
function toggleFAQ(elemento) {
    const item = elemento.parentElement;
    const estabaActivo = item.classList.contains('activo');
    // Cerrar todos
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('activo'));
    // Abrir si no estaba activo
    if (!estabaActivo) {
        item.classList.add('activo');
    }
}

// Enviar formulario (simulación)
function enviarFormulario() {
    const form = document.getElementById('formContacto');
    const inputs = form.querySelectorAll('input, textarea');
    let datos = {};
    inputs.forEach(inp => {
        datos[inp.placeholder || inp.type] = inp.value;
    });
    // Redirigir a WhatsApp con mensaje
    const mensaje = encodeURIComponent(
        `Hola, soy ${datos['Nombre completo'] || 'cliente'}. Me interesa: ${datos['Describa el trámite que necesita...'] || 'información sobre sus servicios'}. Mi teléfono: ${datos['Teléfono o WhatsApp'] || ''}`
        );
    window.open(`https://wa.me/50258793376?text=${mensaje}`, '_blank');
    form.reset();
    alert('¡Gracias! Será redirigido a WhatsApp para continuar la conversación.');
}

// Navbar sombra al scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 6px 30px rgba(0,0,0,0.2)';
    } else {
        nav.style.boxShadow = 'none';
    }
});