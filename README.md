# Indice USB

#### Autor
- Arturo Yepez

#### Language

All of the documentation is initially set to be written in *Spanish*, but all code will be written using English best practices.

## Descripción

El actual paquete tiene como objetivo el ser una herramienta con la que poder hacer cálculo del **Indice Academico** para los estudiantes de la Universidad Simón Bolívar en Caracas, Venezuela.

Este se define como una medida cuantitativa que refleja el rendimiento académico de un estudiante. Este índice se calcula en función de las calificaciones obtenidas en las asignaturas cursadas y los créditos asociados a cada una.

Una de las características del **Indice Academico** es que ofrece una visión clara del desempeño académico del estudiante a lo largo de su carrera universitaria.

## Calculo del Indice Academico

El cálculo del índice académico se realiza de la siguiente manera:
1. **Calificación ponderada de cada asignatura**: Se multiplica la calificación obtenida en cada asignatura por el número de créditos de esa asignatura.
1. **Suma de las calificaciones ponderadas**: Se suman todas las calificaciones ponderadas.
1. **Suma de los créditos**: Se suman los créditos de todas las asignaturas cursadas.
1. **Cálculo del índice académico**: Se divide la suma de las calificaciones ponderadas entre la suma de los créditos.

La fórmula es:

$$
\text{Índice Académico} = \frac{\sum (\text{Calificación de la asignatura} \times \text{Créditos de la asignatura})}{\sum (\text{Créditos de las asignaturas})}
$$

Para estos cálculos:
- No se considerarán las asignatura que tienen "Nota sin efecto" o "Retirada"
- Este indice tiene carácter acumulativo y se calcula trimestralmente tomando en cuenta todas las asignaturas cursadas desde el primer período academico en la universidad.

### Notas sin Efecto

Significa que si apruebas una asignatura anteriormente aplazada, la nueva calificación aprobatoria anulará la nota inmediata para el cálculo del índice académico. Ambas calificaciones se harán constar en tu expediente, y adicionalmente se colocará el calificativo "Nota sin Efecto" a la calificación anterior.

Cabe destacar, si una asignatura es reprobada más de 2 veces, la "Nota sin Efecto" solo se aplica a la última instancia antes de aprobarse.

### Asignatura Retirada

Es un proceso donde los estudiantes pueden abandonar una asignatura sin que afecte negativamente su índice académico. A la asignatura retirada se le agrega el calificativo de "Retirada" y en la nota se coloca un "R".

Entre las características 

## Instalación y Uso

La librería ofrece las herramientas y modelos de datos con los que facilmente se peude hacer el cálculo del índice académico de un estudiante de la USB, para su uso simplemente se requiere hacer la instalación de la líbreria con el comando:

```bash
npm i @arturyepez10/indice-usb-node
```

Luego, se puede importar los modelos para el uso de la libreria:
* `Course`
* `AcademicPeriod`
* `AcademicSummary`

Los pasos a seguir para el uso correcto de la libreria consisten en los siguientes:
1. Dividir en periodos academicos todas las asignaturas
1. Crear una instancia de `AcademicPeriod` para el período académico
1. Migrar la información a diferentes instancias del modelo de `Course`
1. Agregar todas estas instancias a la instancia principal `AcademicPeriod`
1. Repetir el proceso para todos los periodos académicos
1. Crear una instancia de `AcademicSummary` y agregar todos los períodos académicos a esta
1. Para conocer el resultado del índice académico acumulado hasta ese momento se usa el método `summary_grade()` que existe dentro de `AcademicSummary`

## Sugerencias

Si tienen alguna sugerencia, sientanse libres de contactarme o crear un *issue* al respecto :)