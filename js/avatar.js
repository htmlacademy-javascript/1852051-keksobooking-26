const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

document.addEventListener('DOMContentLoaded', () => {
  const fileChooser = document.querySelector('#avatar');
  const preview = document.querySelector('.ad-form-header__preview img');

  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
});
