$('[data-edit]').each((i, container) => {
  container = $(container);
  container.on('click', '[data-edit-open]', e => {
    e.preventDefault();
    container.addClass('is-editing');
  });
  container.on('click', '[data-edit-close]', e => {
    e.preventDefault();
    container.removeClass('is-editing');
  });
});

$('[data-add-line-control]').click(e => {
  e.preventDefault();
  $('[data-add-line-row]')
    .last()
    .clone()
    .addClass('is-editing')
    .appendTo('[data-add-line]');
});
