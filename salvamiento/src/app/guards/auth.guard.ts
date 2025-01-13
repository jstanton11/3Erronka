import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const password = prompt('Idatzi pasahitza administrazio panelera sartzeko:');

  if (password === null) {
    return false;
  }

  if (password === 'admin123') {
    return true;
  } else {
    alert('Pasahitza ez da zuzena'); 
    return false;
  }
};
