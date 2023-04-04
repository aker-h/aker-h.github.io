import React, { useEffect } from 'react';

import ClockInner from 'SRC/components/clock-inner';
import DateInner from 'SRC/components/date-inner';
import Other from 'SRC/components/other';

const Clock: React.FC<{}> = (props: {}) => {
	const app: App = {
		crazyMode: '0',
		date: new Date()
	} as App;	

	window.app = app;

	const clockController = new ClockController();

	const run = async (): Promise<void> => {
		console.log(app);
		app.date = new Date();

		const waitingMillseconds: number = ClockController.getWaitingMillseconds(app.date);
		await wait(waitingMillseconds);

		app.date = new Date();
		clockController.update();
		//ここで一回値を更新

		//1秒ごとにDateを更新して、
		//子コンポーネントの更新関数を実行
		(async () => {
			setInterval(() => {
				app.date = new Date();
				console.log(app);
				clockController.update();
			}, ClockController.A_SECONDS);
		})();

		const waitingSeconds: number = ClockController.getWaitingSeconds(app.date);
		await wait (waitingSeconds * 1000);

		//1分ごとにコンソールをクリア
		(async () => {
			setInterval(ClockController.clearConsole, ClockController.A_MINUTES);
		})();
	};

	useEffect (() => {
		run();
	});

	return <div className="clock-outer">
		<ClockInner clockController={clockController}/>
		<DateInner clockController={clockController}/>
		<Other.Highlight/>
		<Other.Highlight_/>
		<Other.Shadow />
	</div>
};

export default Clock;

async function wait (ms: number): Promise<void> { return new Promise((resolve) => { setTimeout(() => { resolve(); }, ms)});}

class ClockController implements ClockControllerInterface{
	public static readonly A_MINUTES = 60 * 1000;
	public static readonly A_SECONDS = 1000;

	public static async clearConsole (): Promise<void> {
		console.clear();
	}

	public static getWaitingMillseconds (date: Date): number {
		return 1000 - date.getMilliseconds();
	}

	public static getWaitingSeconds (date: Date): number {
		return date.getSeconds();
	}

	//タイムとデートを一括アップデート
	public update(): void {
		this.updateTime();
		this.updateDate();
	}

	//子コンポーネント内で実装
	public updateTime(): void {}
	public updateDate(): void {}
}