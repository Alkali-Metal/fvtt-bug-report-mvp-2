import { ExtendedActorSheet } from "./actor-sheet.mjs";
import { ExtendedItemSheet } from "./item-sheet.mjs";

Hooks.once(`init`, () => {
	Actors.registerSheet(
		game.system.id,
		ExtendedActorSheet,
		{ makeDefault: true },
	);
	Items.registerSheet(
		game.system.id,
		ExtendedItemSheet,
		{ makeDefault: true },
	);
});
