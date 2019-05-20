import { customElement, h } from '@atomico/element';

var style = "@import url(\"https://fonts.googleapis.com/css?family=Muli:400,900\");:host{font-family:Muli,sans-serif;font-size:50px;text-align:center}";

function Tag({ message }) {
	return (
		h('host', { shadowDom: true,}
, h('style', null, style), "👋 ss-ss "
  , message
)
	);
}

Tag.observables = {
	message: String
};

customElement("ss-ss", Tag);
//# sourceMappingURL=module.js.map
