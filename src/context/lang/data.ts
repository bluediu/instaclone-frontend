export const translation = {
  en: {
    auth: {
      title: "Sign up to see your friends' photos.",
      noAccount: { title: "Don't have an account?", btn: 'Sign Up' },
      signInAccount: { title: 'Sign In with your account', btn: 'Sign In' },
    },
    login: {
      email: 'Email',
      password: 'Password',
      btn: 'Sign In',
      errors: {
        email: {
          required: 'Email is required',
          format: 'Invalid email address format.',
        },
        password: {
          required: 'Password is required',
          min: 'Password must be at least 6 characters',
        },
      },
    },
    signUp: {
      firstName: 'First name',
      lastName: 'Last name',
      username: 'Username',
      email: 'Email',
      password: 'Password',
      repeatPassword: 'Repeat Password',
      btn: 'Sign Up',
      errors: {
        firstName: 'First name must be at least 2 characters',
        lastName: 'Last name must be at least 2 characters',
        username: {
          required: 'Username is required',
          match: 'Username cannot have blank spaces',
        },
        email: {
          required: 'E-mail is required',
          format: 'Invalid email address',
        },
        passwords: {
          required: 'Password is required',
          min: 'Password must be at least 6 characters',
          oneOf: 'Passwords are not the same',
        },
      },
    },
    profile: {
      settingAction: 'Edit Profile',
      avatarAction: 'Change Profile Photo',
      form: {
        firstName: 'First name',
        lastName: 'Last name',
        description: 'Description',
        website: 'Website',
        btn: 'Update',
        cancelBtn: 'Cancel',
        errors: {
          firstName: 'First name must be at least 2 characters',
          lastName: 'Last name must be at least 2 characters',
          description: 'Description must be less than 200 characters',
          website: 'Enter a valid URL',
        },
      },
      avatarOpts: {
        upload: 'Upload Photo',
        remove: 'Remove Current Photo',
        cancel: 'Cancel',
      },
    },
    headerOpts: {
      popup: {
        home: 'Home',
        create: 'Create',
      },
      profile: 'Profile',
      logout: 'Log out',
      lang: {
        title: 'Language',
        en: 'English',
        es: 'Spanish',
      },
    },
    posts: {
      title: 'POSTS',
      loader: 'Loading publications...',
      preview: {
        action: {
          like: 'Like',
          comment: 'Comment',
          download: 'Download',
        },
        form: {
          placeholder: 'Add a comment...',
          btn: 'Post',
        },
        opts: {
          delete: 'Delete',
          edit: 'Edit',
          cancel: 'Cancel',
        },
      },
      create: {
        title: 'Drag or select your photo to post it',
        btnSelect: 'Select from device',
        btnCreate: 'Share',
        btnUpdate: 'Update',
        form: {
          desc: 'Description (optional)',
        },
        validations: {
          desc: 'Description must be less than 100 characters',
          img: 'Image is required.',
        },
        helpText: 'To replace the image just select a new one.',
      },
    },
  },
  es: {
    auth: {
      title: 'Regístrate para ver las fotos de tus amigos.',
      noAccount: { title: '¿No tiene cuenta?', btn: 'Regístrate' },
      signInAccount: {
        title: 'Iniciar sección con tu cuenta',
        btn: 'Iniciar sección',
      },
    },
    login: {
      email: 'Correo electrónico',
      password: 'Contraseña',
      btn: 'Iniciar sección',
      errors: {
        email: {
          required: 'Correo electrónico es requerido',
          format: 'Formato invalido para correo electrónico.',
        },
        password: {
          required: 'Contraseña es requerida',
          min: 'La contraseña debe tener al menos 6 caracteres',
        },
      },
    },
    signUp: {
      firstName: 'Nombre',
      lastName: 'Apellido',
      username: 'Usuario',
      email: 'Correo electrónico',
      password: 'Contraseña',
      repeatPassword: 'Repetir contraseña',
      btn: 'Registrarse',
      errors: {
        firstName: 'El nombre debe tener al menos 2 caracteres',
        lastName: 'El apellido debe tener al menos 2 caracteres',
        username: {
          required: 'Usuario es requerido',
          match: 'El usuario no debe contener espacios en blanco',
        },
        email: {
          required: 'Correo electrónico es requerido',
          format: 'Formato invalido de correo electrónico',
        },
        passwords: {
          required: 'La contraseña es requerida',
          min: 'La contraseña debe tener al menos 6 caracteres',
          oneOf: 'Las contraseñas no son iguales',
        },
      },
    },
    profile: {
      settingAction: 'Editar Perfil',
      avatarAction: 'Cambiar Foto de Perfil',
      form: {
        firstName: 'Nombre',
        lastName: 'Apellido',
        description: 'Descripción',
        website: 'Sitio web',
        btn: 'Actualizar',
        cancelBtn: 'Cancelar',
        errors: {
          firstName: 'El nombre debe tener al menos 2 caracteres',
          lastName: 'El apellido debe tener al menos 2 caracteres',
          description: 'La descripción debe ser tener menos de 200 caracteres',
          website: 'Ingrese una URL valida',
        },
      },
      avatarOpts: {
        upload: 'Subir Foto',
        remove: 'Remove Foto Actual',
        cancel: 'Cancelar',
      },
    },
    headerOpts: {
      popup: {
        home: 'Inicio',
        create: 'Crear',
      },
      profile: 'Perfil',
      logout: 'Cerrar sesión',
      lang: {
        title: 'Idioma',
        en: 'Inglés',
        es: 'Español',
      },
    },
    posts: {
      title: 'PUBLICACIONES',
      loader: 'Cargando publicaciones...',
      preview: {
        action: {
          like: 'Me gusta',
          comment: 'Comentario',
          download: 'Descargar',
        },
        form: {
          placeholder: 'Añade un comentario...',
          btn: 'Publicar',
        },
        opts: {
          delete: 'Eliminar',
          edit: 'Editar',
          cancel: 'Cancelar',
        },
      },
      create: {
        title: 'Arrastra o selecciona una foto para publicarla',
        btnSelect: 'Seleccionar de dispositivo',
        btnCreate: 'Compartir',
        btnUpdate: 'Actualizar',
        form: {
          desc: 'Descripción (opcional)',
        },
        validations: {
          desc: 'La descripción debe tener menos de 100 caracteres.',
          img: 'La imagen es requerida.',
        },
        helpText: 'Para remplazar la image solo seleccione una nueva.',
      },
    },
  },
};
