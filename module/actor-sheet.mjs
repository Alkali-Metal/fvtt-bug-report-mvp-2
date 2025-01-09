const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ActorSheetV2 } = foundry.applications.sheets;

export class ExtendedActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
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

export class ExtendedActorSheet2 extends HandlebarsApplicationMixin(ActorSheetV2) {
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
