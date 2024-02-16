document.addEventListener('DOMContentLoaded', async function() {
        console.log(data)
        mostrarReporte(data);

});

function mostrarReporte( {weeks:data} ) {
    const reporteContainer = document.getElementById('reporte');
    reporteContainer.className = 'container';

    data.forEach(semana => {
        const semanaElement = document.createElement('div');
        semanaElement.className = 'card d-flex my-2 p-2';
        semanaElement.innerHTML = `<h2 class="card-title">>> Semana ${semana.number}</h2>`;

        semana.days.forEach(dia => {
            const diaElement = document.createElement('div');
            diaElement.className = 'card-body'
            diaElement.innerHTML = `
                <h3 class="text-center">${dia.date} de 2024</h3>
                <h4>¿Qué hice ayer?</h4>
                <p>-${dia.yesterday}</p>
                <h4>¿Qué haré hoy?</h4>
                <p>-${dia.today}</p>
                <h4>¿Qué problemas pueden presentarse?</h4>
                <p>-${dia.problems}</p>
            `;
            semanaElement.appendChild(diaElement);
        });

        reporteContainer.appendChild(semanaElement);
    });
}
