Feature: Gestión de tareas

  Scenario: Agregar una tarea a la lista
  Given Abro la aplicación todo
  When Añado "Tarea 1" a la lista
  Then Debo ver "Tarea 1" en la lista

  # Scenario: Agregar una tarea y marcarla como completada
  # Given Abro la aplicación todo
  # When Añado "Tarea 1" a la lista
  # And Marco "Tarea 1" como completada
  # Then Debo ver "Tarea 1" marcada como completada

  # Scenario: Agregar una tarea, completarla y desmarcarla
  # Given Abro la aplicación todo
  # When Añado "Tarea 1" a la lista
  # And Marco "Tarea 1" como completada 
  # And Desmarco "Tarea 1" como completeda
  # Then Debo ver "Tarea 1" no marcada como completada

  # Scenario: Editar una tarea
  # Given Abro la aplicación todo
  # When Añado "Tarea 1" a la lista
  # And Edito "Tarea 1" a "Tarea 1.1"
  # Then Debo ver "Tarea 1.1" en la lista
