ko.bindingHandlers['html'] = {
    'init': () => {
        // Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
        return { 'controlsDescendantBindings': true };
    },
    'update': (element, valueAccessor) => {
        // setHtml will unwrap the value if needed
        ko.utils.emptyDomNode(element);

        // There's no legitimate reason to display a stringified observable without unwrapping it, so we'll unwrap it
        let html = ko.utils.unwrapObservable(valueAccessor());

        if (html != null) {
            if (typeof html != 'string')
                html = html.toString();

			const template = document.createElement('template');
			template.innerHTML = html;
			element.appendChild(template.content);
        }
	}
};
