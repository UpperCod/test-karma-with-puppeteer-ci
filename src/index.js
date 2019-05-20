import { h, customElement } from "@atomico/element";
import style from "./style.css";

function Tag({ message }) {
	return (
		<host shadowDom>
			<style>{style}</style>
			👋 ss-ss {message}
		</host>
	);
}

Tag.observables = {
	message: String
};

customElement("ss-ss", Tag);
