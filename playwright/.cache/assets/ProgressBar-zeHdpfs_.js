import { e as element, j as space, t as text, a as attr, k as set_style, i as insert, b as append, s as set_data, n as noop, d as detach, S as SvelteComponent, g as init, h as safe_not_equal } from './index-CbvjJfF0.js';
import './index-DC8zqID4.js';

/* src/lib/ProgressBar.svelte generated by Svelte v4.2.18 */

function create_fragment(ctx) {
	let div1;
	let div0;
	let t0;
	let label;
	let t1;

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			t0 = space();
			label = element("label");
			t1 = text(/*barWidth*/ ctx[9]);
			attr(div0, "id", /*progressId*/ ctx[4]);
			attr(div0, "class", /*progressClass*/ ctx[5]);
			set_style(div0, "width", /*barWidth*/ ctx[9]);
			attr(div1, "id", /*progressBarId*/ ctx[1]);
			attr(div1, "class", /*progressBarClass*/ ctx[3]);
			attr(div1, "role", "progressbar");
			attr(div1, "aria-valuemin", "0");
			attr(div1, "aria-valuemax", "100");
			attr(div1, "aria-valuenow", /*progress*/ ctx[0]);
			attr(div1, "style", /*progressBarStyle*/ ctx[2]);
			attr(label, "id", /*labelId*/ ctx[6]);
			attr(label, "class", /*labelClass*/ ctx[7]);
			attr(label, "style", /*labelStyle*/ ctx[8]);
			attr(label, "for", /*progressBarId*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			insert(target, t0, anchor);
			insert(target, label, anchor);
			append(label, t1);
		},
		p(ctx, [dirty]) {
			if (dirty & /*progressId*/ 16) {
				attr(div0, "id", /*progressId*/ ctx[4]);
			}

			if (dirty & /*progressClass*/ 32) {
				attr(div0, "class", /*progressClass*/ ctx[5]);
			}

			if (dirty & /*barWidth*/ 512) {
				set_style(div0, "width", /*barWidth*/ ctx[9]);
			}

			if (dirty & /*progressBarId*/ 2) {
				attr(div1, "id", /*progressBarId*/ ctx[1]);
			}

			if (dirty & /*progressBarClass*/ 8) {
				attr(div1, "class", /*progressBarClass*/ ctx[3]);
			}

			if (dirty & /*progress*/ 1) {
				attr(div1, "aria-valuenow", /*progress*/ ctx[0]);
			}

			if (dirty & /*progressBarStyle*/ 4) {
				attr(div1, "style", /*progressBarStyle*/ ctx[2]);
			}

			if (dirty & /*barWidth*/ 512) set_data(t1, /*barWidth*/ ctx[9]);

			if (dirty & /*labelId*/ 64) {
				attr(label, "id", /*labelId*/ ctx[6]);
			}

			if (dirty & /*labelClass*/ 128) {
				attr(label, "class", /*labelClass*/ ctx[7]);
			}

			if (dirty & /*labelStyle*/ 256) {
				attr(label, "style", /*labelStyle*/ ctx[8]);
			}

			if (dirty & /*progressBarId*/ 2) {
				attr(label, "for", /*progressBarId*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(div1);
				detach(t0);
				detach(label);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	console.log("in the progress bar");
	let { progress = 0 } = $$props;
	let { progressBarId = "progressBar" } = $$props;
	let { progressBarStyle = "" } = $$props;
	let { progressBarClass = "w-full bg-gray-200 rounded-full h-2.5 dark:bg-black" } = $$props;
	let { progressId = "" } = $$props;
	let { progressClass = "bg-blue-600 h-2.5 rounded-full" } = $$props;
	let { labelId = `label for ${progressBarId}` } = $$props;
	let { labelClass = "text-sm" } = $$props;
	let { labelStyle = "" } = $$props;
	let barWidth;

	$$self.$$set = $$props => {
		if ('progress' in $$props) $$invalidate(0, progress = $$props.progress);
		if ('progressBarId' in $$props) $$invalidate(1, progressBarId = $$props.progressBarId);
		if ('progressBarStyle' in $$props) $$invalidate(2, progressBarStyle = $$props.progressBarStyle);
		if ('progressBarClass' in $$props) $$invalidate(3, progressBarClass = $$props.progressBarClass);
		if ('progressId' in $$props) $$invalidate(4, progressId = $$props.progressId);
		if ('progressClass' in $$props) $$invalidate(5, progressClass = $$props.progressClass);
		if ('labelId' in $$props) $$invalidate(6, labelId = $$props.labelId);
		if ('labelClass' in $$props) $$invalidate(7, labelClass = $$props.labelClass);
		if ('labelStyle' in $$props) $$invalidate(8, labelStyle = $$props.labelStyle);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*progress*/ 1) {
			$: $$invalidate(9, barWidth = progress + "%");
		}
	};

	return [
		progress,
		progressBarId,
		progressBarStyle,
		progressBarClass,
		progressId,
		progressClass,
		labelId,
		labelClass,
		labelStyle,
		barWidth
	];
}

class ProgressBar extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			progress: 0,
			progressBarId: 1,
			progressBarStyle: 2,
			progressBarClass: 3,
			progressId: 4,
			progressClass: 5,
			labelId: 6,
			labelClass: 7,
			labelStyle: 8
		});
	}
}

export { ProgressBar as default };
//# sourceMappingURL=ProgressBar-zeHdpfs_.js.map
