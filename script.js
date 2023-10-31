// Definimos una lista de objetos para los wesen iniciales.
const initialWesenList = [
    // ...datos de 10 wesen iniciales...
    {
        id: 1,
        nombre: 'Anubis',
        imagen: 'imagenes/Anubis.png',
        tipo: 'Chacal',
        peligrosidad: 'Pacifico',
        descripcion: 'piel oscura, ojos amarillos y colmillos',
        notas: '',
        
    },
    {
        id: 2,
        nombre: 'Aswang',
        imagen: 'imagenes/Aswang.png',
        tipo: 'Vampiro',
        peligrosidad: 'Peligroso',
        descripcion: 'piel pálida, ojos rojos y colmillos',
        notas: '',
    },
    { 
        id: 3,
        nombre: 'Skalenzahne',
        imagen: 'imagenes/Skalenzahne.png',
        tipo: 'Cocodrilo',
        peligrosidad: 'Peligroso',
        descripcion: 'piel escamosa de color verde, ojos amarillos y dientes afilados',
        notas: '',
    },
    { 
        id: 4,
        nombre: 'Blutbad',
        imagen: 'imagenes/Blutbad.png',
        tipo: 'Lobo',
        peligrosidad: 'Peligroso',
        descripcion: ' pelaje rojo, ojos amarillos y colmillos',
        notas: '',
    },
    { 
        id: 5,
        nombre: 'Pflichttreue',
        imagen: 'imagenes/Pflichttreue.png',
        tipo: 'Felino',
        peligrosidad: 'Peligroso',
        descripcion: 'pelaje blanco con manchas negras, ojos amarillos y dientes afilados',
        notas: '',
    },
    { 
        id: 6,
        nombre: 'Fuchsbau',
        imagen: 'imagenes/Fuchsbau.png',
        tipo: 'Zorro',
        peligrosidad: 'Pacifico',
        descripcion: 'pelaje naranja con manchas negras, ojos marrones y orejas puntiagudas',
        notas: '',
    },
    { 
        id: 7,
        nombre: 'Gelumcaedus',
        imagen: 'imagenes/Gelumcaedus.png',
        tipo: 'Cocodrilo',
        peligrosidad: 'Peligroso',
        descripcion: 'piel verde escamosa, ojos amarillos y dientes afilados',
        notas: '',
    },
    { 
        id: 8,
        nombre: 'Genio Innocuo',
        imagen: 'imagenes/Genio_Innocuo.png',
        tipo: 'Tortuga',
        peligrosidad: 'Pacifico',
        descripcion: 'caparazón marrón con manchas negras, ojos grandes y una cara de humano',
        notas: '',
    },
    { 
        id: 9,
        nombre: 'Gluhenvolk',
        imagen: 'imagenes/Gluhenvolk.png',
        tipo: 'Alienigena',
        peligrosidad: 'Peligroso',
        descripcion: 'piel escamosa de color verde brillante, ojos amarillos y dientes afilados',
        notas: '',
    },
    {
        id: 10,
        nombre: 'Hundjager',
        imagen: 'imagenes/Hundjager.png',
        tipo: 'Perro',
        peligrosidad: 'Peligroso',
        descripcion: 'pelaje negro, ojos amarillos y colmillos',
        notas: '',
    }
];
const wesenListContainer = document.getElementById('wesenListContainer');
let selectedWesen = null; // Variable para almacenar el Wesen seleccionado


function loadWesenList() {
    wesenListContainer.innerHTML = ''; // Limpiar la lista antes de cargar nuevos elementos
    initialWesenList.forEach((wesen, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('wesen-list-item');

        // Añadir el atributo data-wesen-id al elemento de la lista
        listItem.setAttribute('data-wesen-id', wesen.id);

        // Crear imagen del wesen
        const wesenImage = document.createElement('img');
        wesenImage.src = wesen.imagen;
        wesenImage.alt = `Imagen de ${wesen.nombre}`;
        listItem.appendChild(wesenImage);

        // Crear nombre del wesen
        const wesenName = document.createElement('span');
        wesenName.textContent = wesen.nombre;
        listItem.appendChild(wesenName);

        // Al hacer clic en un elemento de la lista, mostrar los detalles del wesen
        listItem.addEventListener('click', () => {
            displayWesenDetails(wesen);
        });

        // Agregar el elemento a la lista
        wesenListContainer.appendChild(listItem);
    });
}
// Llamar a la función para cargar la lista al cargar la página
window.onload = function () {
    loadWesenList();
};
// Función para mostrar los detalles del wesen seleccionado en el formulario.
function displayWesenDetails(wesen) {
    // Obtener los elementos del formulario por su ID
    const nombreElement = document.getElementById('nombre');
    const imagenElement = document.getElementById('imagen');
    const tipoElement = document.getElementById('tipo');
    const peligrosidadElement = document.getElementById('peligrosidad');
    const descripcionElement = document.getElementById('descripcion');
    const notasElement = document.getElementById('notas');

    // Mostrar los detalles del wesen en el formulario
    nombreElement.value = wesen.nombre;
    imagenElement.src = wesen.imagen;
    descripcionElement.value = wesen.descripcion;
    notasElement.value = wesen.notas;

    // Actualizar la imagen del Wesen en la lista
    const listItem = document.querySelector(`.wesen-list-item[data-wesen-id="${wesen.id}"]`);
    if (listItem) {
        const wesenImageInList = listItem.querySelector('img');
        if (wesenImageInList) {
            wesenImageInList.src = wesen.imagen;
        }
    }
   // Seleccionar la opción correcta en el campo tipo
   tipoElement.value = wesen.tipo.toLowerCase();

   // Seleccionar la opción correcta en el campo peligrosidad
   peligrosidadElement.value = wesen.peligrosidad.toLowerCase();


    selectedWesen = wesen; // Almacena el wesen seleccionado en la variable selectedWesen
}


// Función para eliminar el wesen actualmente seleccionado.
function deleteWesen() {
    if (!selectedWesen) {
        alert('Por favor, selecciona un Wesen para eliminar.');
        return;
    }

    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar el Wesen '${selectedWesen.nombre}'?`);

    if (confirmacion) {
        // Encuentra el índice del wesen seleccionado en la lista
        const indice = initialWesenList.findIndex(wesen => wesen.id === selectedWesen.id);

        // Elimina el wesen del array initialWesenList en el índice encontrado
        if (indice !== -1) {
            initialWesenList.splice(indice, 1);

            console.log(`Wesen '${selectedWesen.nombre}' eliminado.`);

            // Vuelve a cargar la lista para reflejar el cambio en la interfaz
            loadWesenList();

            // Limpia los campos del formulario después de eliminar el wesen
            clearForm();
            // Limpia el campo de imagen
            const imagenElement = document.getElementById('imagen');
            imagenElement.src = ''; // Establece la imagen en blanco
        } else {
            console.error('No se encontró el wesen en la lista.');
        }
    }
}

// Función para limpiar los campos del formulario
function clearForm() {
    const elements = document.querySelectorAll('.form-input');
    elements.forEach(element => {
        if (element.type === 'text' || element.tagName === 'TEXTAREA') {
            element.value = '';
        } else if (element.type === 'file') {
            element.value = ''; // Limpiar el valor del input de tipo archivo
        
        } else if (element.tagName === 'SELECT') {
            element.value = ''; // Limpiar el valor del campo de selección
        }
    });
    // Limpiar el campo de imagen
    const imagenElement = document.getElementById('imagen');
    imagenElement.src = ''; // Establece la imagen en blanco
}
// Obtén el botón "Agregar Nuevo Wesen" y agrega un event listener
const addWesenButton = document.getElementById('addWesenButton');
addWesenButton.addEventListener('click', function () {
    selectedWesen = null; // Almacena el wesen seleccionado en la variable selectedWesen
    clearForm(); // Llama a la función para limpiar los campos del formulario
});

// Función para agregar un nuevo wesen a la lista.
function addNewWesen() {
    // Obtener los valores del formulario para el nuevo wesen
    const nuevoNombre = document.getElementById('nombre').value;
    const nuevaImagen = document.getElementById('imagen').getAttribute('src'); // Obtener la ruta de la imagen correctamente  
    const nuevoTipo = document.getElementById('tipo').value;
    const nuevaPeligrosidad = document.getElementById('peligrosidad').value;
    const nuevaDescripcion = document.getElementById('descripcion').value;
    const nuevasNotas = document.getElementById('notas').value;
    // Validar que los campos obligatorios no estén vacíos
    if (!nuevoNombre || !nuevoTipo || !nuevaPeligrosidad) {
        alert('Por favor, completa los campos obligatorios: Nombre, Tipo y Peligrosidad.');
        return;
    }

    // Crear un nuevo objeto wesen con los valores del formulario
    const nuevoWesen = {
        id: initialWesenList.length + 1, // Asigna un nuevo ID al nuevo wesen
        nombre: nuevoNombre,
        imagen: nuevaImagen,
        tipo: nuevoTipo,
        peligrosidad: nuevaPeligrosidad,
        descripcion: nuevaDescripcion,
        notas: nuevasNotas
    };

    // Agregar el nuevo wesen a la lista
    initialWesenList.push(nuevoWesen);

    // Recargar la lista para reflejar el cambio en la interfaz
    loadWesenList();

    // Limpiar los campos del formulario después de agregar el wesen
    clearForm();

    // Mensaje de confirmación
    alert(`Nuevo Wesen '${nuevoNombre}' agregado.`);
}
function saveWesen() {
    // Obtener los valores del formulario para el wesen seleccionado
    const nuevoNombre = document.getElementById('nombre').value;
    const nuevaImagen = document.getElementById('imagen').src;
    const nuevoTipo = document.getElementById('tipo').value;
    const nuevaPeligrosidad = document.getElementById('peligrosidad').value;
    const nuevaDescripcion = document.getElementById('descripcion').value;
    const nuevasNotas = document.getElementById('notas').value;
    // Validar que los campos obligatorios no estén vacíos
    if (!nuevoNombre || !nuevoTipo || !nuevaPeligrosidad) {
        alert('Por favor, completa los campos obligatorios: Nombre, Tipo y Peligrosidad.');
        return;
    }
    // Actualizar el wesen seleccionado si existe
    if (selectedWesen) {
        selectedWesen.nombre = nuevoNombre;
        selectedWesen.imagen = nuevaImagen;
        selectedWesen.tipo = nuevoTipo;
        selectedWesen.peligrosidad = nuevaPeligrosidad;
        selectedWesen.descripcion = nuevaDescripcion;
        selectedWesen.notas = nuevasNotas;

        // Recargar la lista para reflejar el cambio en la interfaz
        loadWesenList();

        // Limpiar los campos del formulario después de guardar los cambios
        clearForm();

        // Mensaje de confirmación
        alert(`Wesen '${nuevoNombre}' actualizado.`);
    } else {
        // Si no hay un wesen seleccionado, llamar a la función para agregar un nuevo wesen
        addNewWesen();
    }
}
function previewImage(event) {
    const imagenElement = document.getElementById('imagen');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        imagenElement.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        imagenElement.src = ""; // Limpiar la imagen si no se selecciona ningún archivo
    }
}

// Obtén el botón "Guardar" y agrega un event listener
const saveWesenButton = document.getElementById('saveWesenButton');
saveWesenButton.addEventListener('click', function () {
    saveWesen(); // Llama a la función para guardar el Wesen
});

// Obtén el botón "Eliminar" y agrega un event listener
const deleteWesenButton = document.getElementById('deleteWesenButton');
deleteWesenButton.addEventListener('click', function () {
    deleteWesen(); // Llama a la función para eliminar el Wesen
});

