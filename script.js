const class_aliases = {
    '.server': 'card text-dark mb-3',
    '.server-name': 'h3 card-title',
    '.join-button': 'btn btn-primary',
    '.other-button': 'btn btn-secondary',
    '.tags': 'card-footer text-muted'
};

$(document).ready(function() {
    // On Document ready

    // For each css class alias, replace it with the actual css classes to render it.
    for (const prop in class_aliases) {
        const replaced_by = class_aliases[prop];
        $( prop ).addClass(replaced_by);
    }

    // Render feather icons.
    feather.replace();
});