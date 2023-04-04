import React from 'react';
import { Root, createRoot} from 'react-dom/client';

import Clock from 'SRC/components/clock';

(async (d) => {
	const clockFrame = d.querySelector('div.clock-frame#reactRoot') as HTMLDivElement;
	const root = createRoot(clockFrame);
	root.render(<Clock />);
})(document)