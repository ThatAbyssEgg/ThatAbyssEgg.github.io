// Создание главного модального окна(с регистрацией)
  function createModal() {

  const modal = document.createElement('div');
  modal.classList.add('popup');
  modal.id = "modal_win";

  let wrapper = document.createElement('div');
  wrapper.classList.add('dws-wrapper');
  modal.append(wrapper);

  const dwsForm = document.createElement('div');
  dwsForm.classList.add('dws-form');
  wrapper.append(dwsForm);

  const form = document.createElement('form');
  form.classList.add('popup-form');
  dwsForm.append(form);

  const iClose = document.createElement('i');
  iClose.classList.add('close', 'fa-solid', 'fa-xmark');
  iClose.id = 'closeBtn';
  form.append(iClose);
  
  const applyLabel = document.createElement('label');
  applyLabel.classList.add('lbl-apply', 'active');
  applyLabel.textContent = 'Apply';
  form.append(applyLabel);
 
  let divInput = document.createElement('div');
  divInput.classList.add('text-input');
  divInput.textContent = 'Name';
  form.append(divInput);

  const nameInput = document.createElement('input');
  nameInput.classList.add('input');
  nameInput.placeholder = 'Enter your name';
  nameInput.type = 'text';
  nameInput.id = 'nameInput';
  form.append(nameInput);

  let incorr = document.createElement('div');
  incorr.classList.add('incorrect');
  incorr.id = 'incName';
  incorr.textContent = 'Enter the correct name';
  form.append(incorr);

  divInput = document.createElement('div');
  divInput.classList.add('text-input');
  divInput.textContent = 'Email';
  form.append(divInput);

  const emailInput = document.createElement('input');
  emailInput.classList.add('input');
  emailInput.placeholder = 'Enter your email';
  emailInput.type = 'email';
  emailInput.id = 'emailInput';
  form.append(emailInput);

  incorr = document.createElement('div');
  incorr.classList.add('incorrect');
  incorr.id = 'incEmail';
  incorr.textContent = 'Enter the correct e-mail';
  form.append(incorr);

  divInput = document.createElement('div');
  divInput.classList.add('text-input');
  divInput.textContent = 'Phone Number';
  form.append(divInput);

  const phoneInput = document.createElement('input');
  phoneInput.classList.add('input');
  phoneInput.placeholder = 'Enter your phone num';
  phoneInput.type = 'text';
  phoneInput.id = 'phoneInput';
  form.append(phoneInput);

  incorr = document.createElement('div');
  incorr.classList.add('incorrect');
  incorr.id = 'incPhone';
  incorr.textContent = 'Enter the correct phone number';
  form.append(incorr);

  const signBtn = document.createElement('span');
  signBtn.classList.add('apply-btn', 'disabled');
  signBtn.id = 'appl';
  signBtn.textContent = 'Apply';
  form.append(signBtn);
  document.body.appendChild(modal);
  return modal;
}

// Создаем второе модальное окно
function createNextModal() {
  const modal = document.createElement('div');
  modal.classList.add('popup');
  modal.id = "modal_win";
  let wrapper = document.createElement('div');
  wrapper.classList.add('dws-wrapper');
  modal.append(wrapper);
  const dwsForm = document.createElement('div');
  dwsForm.classList.add('dws-form');
  wrapper.append(dwsForm);
  const form = document.createElement('form');
  form.classList.add('popup-form');
  dwsForm.append(form);
  const textDiv = document.createElement('div');
  textDiv.textContent = 'You have successfully applied for the master class!';
  textDiv.id = 'success';
  textDiv.classList.add('success');
  form.append(textDiv);
  document.body.appendChild(modal);
  return modal;
}


function modal() {
  const modal = createModal();
  return {
    open() {
      modal.style.display = "block";
    },
    close() {
      modal.style.display = "none";
    },
    destroy() {
      modal.remove();
    }
  }
}

function nextModal() {
  const nextModal = createNextModal();
  return {
    open() {
      nextModal.style.display = "block";
    },
    close() {
      nextModal.style.display = "none";
    }
  }
}