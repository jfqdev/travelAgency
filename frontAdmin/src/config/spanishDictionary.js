var englishMessages = {
  ra: {
    action: {
      add_filter: "Add filter",
      add: "Agregar",
      back: "Ir atrás",
      bulk_actions:
        "1 elemento seleccionado |||| %{smart_count} elementos seleccionados",
      cancel: "Cancelar",
      clear_input_value: "Clear value",
      clone: "Clone",
      confirm: "Confirmar",
      create: "Crear",
      delete: "Eliminar",
      edit: "Editar",
      export: "Exportar",
      list: "Listar",
      refresh: "Refrescar",
      remove_filter: "Remove this filter",
      remove: "Eliminar",
      save: "Grabar",
      search: "Search",
      show: "Show",
      sort: "Sort",
      undo: "Deshacer",
      unselect: "Deseleccionar",
      expand: "Expandir",
      close: "Cerrar",
      open_menu: "Abrir menú",
      close_menu: "Cerrar menú",
    },
    boolean: {
      true: "Yes",
      false: "No",
      null: " ",
    },
    //edit: '%{name} #%{id}',
    //create: 'Create %{name}',
    page: {
      create: "Nueva Entrada",
      dashboard: "Sportrip",
      edit: "Id #%{id}",
      error: "Ha habido un error",
      list: "%{name}",
      loading: "Cargando",
      not_found: "No encontrado",
      show: "%{name} #%{id}",
      empty: "No %{name} yet.",
      invite: "Do you want to add one?",
    },
    input: {
      file: {
        upload_several: "Drop some files to upload, or click to select one.",
        upload_single: "Drop a file to upload, or click to select it.",
      },
      image: {
        upload_several: "Drop some pictures to upload, or click to select one.",
        upload_single: "Drop a picture to upload, or click to select it.",
      },
      references: {
        all_missing: "Unable to find references data.",
        many_missing:
          "At least one of the associated references no longer appears to be available.",
        single_missing:
          "Associated reference no longer appears to be available.",
      },
      password: {
        toggle_visible: "Ocultar",
        toggle_hidden: "Mostrar contraseña",
      },
    },
    //bulk_delete_content: 'Deseas eliminar el item %{name}? |||| Deseas eliminar los items %{smart_count} items?',
    //delete_title: 'Eliminar %{name} #%{id}',
    //bulk_delete_title: 'Eliminar %{name} |||| Eliminar %{smart_count} %{name}',
    message: {
      about: "About",
      are_you_sure: "Estas seguro?",
      bulk_delete_content:
        "Deseas eliminar este elemento ? La acción no podrá ser revertida |||| Deseas eliminar estos Elementos ? ( %{smart_count} ). La acción no podrá ser revertida  ",
      bulk_delete_title:
        "Eliminar Elemento |||| Eliminar %{smart_count} Elementos",
      delete_content:
        "Deseas eliminar este elemento ? La acción no podrá ser revertida.",
      delete_title: "Eliminar Elemento #%{id}",
      details: "Details",
      error:
        "Ocurrió un error en el cliente y tu paticion no pudo ser completada",
      invalid_form: "El formulario no es valido. Por favor revisar errores.",
      loading: "La pagina esta cargando, aguarde un momento por favor.",
      no: "No",
      not_found: "Either you typed a wrong URL, or you followed a bad link.",
      yes: "Yes",
      unsaved_changes:
        "Some of your changes weren't saved. Are you sure you want to ignore them?",
    },
    navigation: {
      no_results: "No results found",
      no_more_results:
        "The page number %{page} is out of boundaries. Try the previous page.",
      page_out_of_boundaries: "Page number %{page} out of boundaries",
      page_out_from_end: "Cannot go after last page",
      page_out_from_begin: "Cannot go before page 1",
      page_range_info: "%{offsetBegin}-%{offsetEnd} of %{total}",
      page_rows_per_page: "Rows per page:",
      next: "Next",
      prev: "Prev",
    },
    sort: {
      sort_by: "Sort by %{field} %{order}",
      ASC: "ascending",
      DESC: "descending",
    },
    auth: {
      auth_check_error: "Por favor iniciar sesión para continuar",
      user_menu: "Perfil",
      username: "Usuario",
      password: "Contraseña",
      sign_in: "Iniciar sesión",
      sign_in_error: "La autenticación falló, por favor reintentar.",
      logout: "Cerrar sesión",
    },
    notification: {
      updated: "Elemento editado |||| %{smart_count} elementos editados",
      created: "Elemento Creado",
      deleted: "Elemento Eliminado |||| %{smart_count} elementos eliminados",
      bad_item: "Incorrect element",
      item_doesnt_exist: "Element does not exist",
      http_error: "Server communication error",
      data_provider_error: "dataProvider error. Check the console for details.",
      i18n_error: "Cannot load the translations for the specified language",
      canceled: "Acción cancelada",
      logged_out: "Tu sesión ha terminado, por favor reconectar",
    },
    validation: {
      required: "Campo requerido",
      minLength: "Must be %{min} characters at least",
      maxLength: "Must be %{max} characters or less",
      minValue: "Must be at least %{min}",
      maxValue: "Must be %{max} or less",
      number: "Must be a number",
      email: "Must be a valid email",
      oneOf: "Must be one of: %{options}",
      regex: "Must match a specific format (regexp): %{pattern}",
    },
  },
};
export default englishMessages;