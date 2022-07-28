const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileHandle = (chooserSelector, previewSelector) => {
  const fileChooserElement = document.querySelector(chooserSelector);
  const previewElement = document.querySelector(previewSelector);

  fileChooserElement.addEventListener('change', () => {
    const file = fileChooserElement.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      previewElement.src = URL.createObjectURL(file);
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  fileHandle('#avatar', '.ad-form-header__preview img');
  fileHandle('#images', '.ad-form__photo img');
});
