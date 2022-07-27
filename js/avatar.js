const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileHandle = (chooserSelector, previewSelector) => {
  const fileChooser = document.querySelector(chooserSelector);
  const preview = document.querySelector(previewSelector);

  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  fileHandle('#avatar', '.ad-form-header__preview img');
  fileHandle('#images', '.ad-form__photo img');
});
