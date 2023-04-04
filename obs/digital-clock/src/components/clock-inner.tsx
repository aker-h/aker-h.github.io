import React  from 'react';

import SevenSegments from 'SRC/components/seven-segments';
import Other from 'SRC/components/other';

const ClockInner = (props: ClockInnerProps): JSX.Element => {
	//console.log(props);

	const tc = new TimeController ();

	props.clockController.updateTime = (): void => {
		tc.update();
	}

	// useEffect (() => {
	// 	tc.update();
	// });
	
	return <div className="clock-inner">
		<SevenSegments on='_' segmentType='hoursLeft' timeController={tc}/>
		<SevenSegments on='_' segmentType='hoursRight' timeController={tc}/>
		<Other.Colon/>
		<SevenSegments on='_' segmentType='minutesLeft' timeController={tc}/>
		<SevenSegments on='_' segmentType='minutesRight' timeController={tc}/>
		<Other.Colon/>			
		<SevenSegments on='_' segmentType='secondsLeft' timeController={tc}/>
		<SevenSegments on='_' segmentType='secondsRight' timeController={tc}/>
		<Other.Glass />
	</div>
};

export default ClockInner;

interface ClockInnerProps {
	clockController: ClockControllerInterface
};

const Colon = (p: {}): JSX.Element => { return <div className="colon-outer"></div>};

function dateToObject (date: Date): ClockDataProps {
	const hours = (date.getHours() < 12)? date.getHours() + (24 * Number(window.app.crazyMode)): date.getHours();

	const sd: string = date.toString();	 //StringfiedDate

	//Tue Apr 04 2023 02:06:57 GMT+0900 (日本標準時)

	const clockDataProps: ClockDataProps = {
		hLeft: (hours < 10)? '_':  `${hours}`.charAt(0) as SevenSegmentsAugment,
		hRight: `${hours}`.slice(-1) as SevenSegmentsAugment,
		mLeft: sd.charAt(19) as SevenSegmentsAugment,
		mRight: sd.charAt(20) as SevenSegmentsAugment,
		sLeft: sd.charAt(22) as SevenSegmentsAugment,
		sRight: sd.charAt(23) as SevenSegmentsAugment
	} as ClockDataProps;

	return clockDataProps;
}

interface ClockDataProps {
	hLeft: SevenSegmentsAugment;
	hRight: SevenSegmentsAugment;
	mLeft: SevenSegmentsAugment;
	mRight: SevenSegmentsAugment;
	sLeft: SevenSegmentsAugment;
	sRight: SevenSegmentsAugment;	
}

class TimeController implements TimeControllerInterface {
	//親コンポーネントから渡される関数にコールバックとして渡す
	public update (): void {
		const obj = dateToObject(window.app.date);

		this.updateHoursLeft(obj.hLeft);
		this.updateHoursRight(obj.hRight);
		this.updateMinutesLeft(obj.mLeft);
		this.updateMinutesRight(obj.mRight);
		this.updateSecondsLeft(obj.sLeft);
		this.updateSecondsRight(obj.sRight);
	}

	//各セグメント側で実装する
	public updateHoursLeft (aug: SevenSegmentsAugment): void {}
    public updateHoursRight (aug: SevenSegmentsAugment): void {}
    public updateMinutesLeft (aug: SevenSegmentsAugment): void {}
    public updateMinutesRight (aug: SevenSegmentsAugment): void {}
    public updateSecondsLeft (aug: SevenSegmentsAugment): void {}
    public updateSecondsRight (aug: SevenSegmentsAugment): void {}
}