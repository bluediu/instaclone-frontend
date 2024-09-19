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
  },
};
