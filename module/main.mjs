import { ExtendedActorSheet, ExtendedActorSheet2 } from "./actor-sheet.mjs";
import { ExtendedItemSheet, ExtendedItemSheet2 } from "./item-sheet.mjs";

Hooks.once(`init`, () => {
	Actors.registerSheet(
		game.system.id,
		ExtendedActorSheet,
		{ makeDefault: true, label: "Auto Width" },
	);
	Actors.registerSheet(
		game.system.id,
		ExtendedActorSheet2,
		{ makeDefault: false, label: "No Specified Width" },
	);
	Items.registerSheet(
		game.system.id,
		ExtendedItemSheet,
		{ makeDefault: true, label: "Auto Width" },
	);
	Items.registerSheet(
		game.system.id,
		ExtendedItemSheet2,
		{ makeDefault: false, label: "No Specified Width" },
	);
});
