const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ItemSheetV2 } = foundry.applications.sheets;

export class ExtendedItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
	static DEFAULT_OPTIONS = {
		position: {
			width: `auto`,
			height: `auto`,
		},
	};

	static PARTS = {
		content: {
			template: `systems/fvttmvp2/templates/hello.hbs`
		}
	};
};

export class ExtendedItemSheet2 extends HandlebarsApplicationMixin(ItemSheetV2) {
	static DEFAULT_OPTIONS = {
		position: {
			// width: `auto`,
			height: `auto`,
		},
	};

	static PARTS = {
		content: {
			template: `systems/fvttmvp2/templates/hello.hbs`
		}
	};
};
