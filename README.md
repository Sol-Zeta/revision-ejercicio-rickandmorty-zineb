# revision-ejercicio-rickandmorty-zineb

El error no estaba en la función swapClasses, sino en la decisión de capturar el div cuya clase queremos modificar utilizando querySelector({id})

querySelector devuelve el primer elemento del documento que coincida con el grupo especificado de selectores. Entonces, en cada iteración del forEach, querySelector estaba capturando siempre el mismo div, es decir, el de la primera tarjeta. 

Dejé comentado en el fichero scripts.js el paso a paso de mi propuesta de solución (los comentarios van hasta la linea 53).

Creo que la clave está en generar dinámicamente todo el HTML y luego capturar todos los divs a modificar a través de su clase con querySelectorAll({class}) para poder trabajar con todos los divs. 

El método querySelectorAll() devuelve una NodeList que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.
