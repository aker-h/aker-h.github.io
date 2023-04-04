import React, { useEffect } from 'react';

import FourteenSegments from 'SRC/components/fourteen-segments';
import SixteenSegments from 'SRC/components/sixteen-segments';
import Other from 'SRC/components/other';

const DateInner = (props: DateInnerProps): JSX.Element => {
	console.log(props);

	const dc = new DateController();

	props.clockController.updateDate = (): void => {
		dc.update();
	};

	useEffect(() => {
		dc.update();
	});

	return <div className="date-inner">
		<FourteenSegments on='_' segmentType='day1' dateController={dc}/>
		<SixteenSegments on='_' segmentType='day2' dateController={dc}/>
		<SixteenSegments on='_' segmentType='day3' dateController={dc}/>
		<Other.Space />
		<FourteenSegments on='_' segmentType='dateLeft' dateController={dc}/>
		<FourteenSegments on='_' segmentType='dateRight' dateController={dc}/>
		<SixteenSegments on='_' segmentType='indexLeft' dateController={dc}/>
		<SixteenSegments on='_' segmentType='indexRight' dateController={dc}/>
		<Other.Space />
		<FourteenSegments on='_' segmentType='month1' dateController={dc}/>
		<SixteenSegments on='_' segmentType='month2' dateController={dc}/>
		<SixteenSegments on='_' segmentType='month3' dateController={dc}/>
		<Other.Space />
		<FourteenSegments on='_' segmentType='year1' dateController={dc}/>
		<FourteenSegments on='_' segmentType='year2' dateController={dc}/>
		<FourteenSegments on='_' segmentType='year3' dateController={dc}/>
		<FourteenSegments on='_' segmentType='year4' dateController={dc}/>
		<Other.Glass />
	</div>
};

export default DateInner;
export {
	DateInner
}

interface DateInnerProps {
	clockController: ClockControllerInterface
}

// const Space = (p: {}): JSX.Element => { return <div className="space"></div> };

function dateToObject (date: Date): DateDataProps {
	const now = new Date(date);
	
	if (now.getHours() < 12) {
		now.setDate(now.getDate() - Number(window.app.crazyMode));
	}

	const sd: string = date.toString();	//StringfiedDate

	//Tue Apr 04 2023 02:06:57 GMT+0900 (日本標準時)

	const dateDataProps: DateDataProps = {
		day1: sd.charAt(0) as FourteenSegmentsAugment,
		day2: sd.charAt(1) as SixteenSegmentsAugment,
		day3: sd.charAt(2) as SixteenSegmentsAugment,
		dateLeft: sd.charAt(8).replace('0', '_') as FourteenSegmentsAugment,
		dateRight: sd.charAt(9) as FourteenSegmentsAugment,
		indexLeft: 't',
		indexRight: 'h',
		month1: sd.charAt(4) as FourteenSegmentsAugment,
		month2: sd.charAt(5) as SixteenSegmentsAugment,
		month3: sd.charAt(6) as SixteenSegmentsAugment,
		year1: sd.charAt(11) as FourteenSegmentsAugment,
		year2: sd.charAt(12) as FourteenSegmentsAugment,
		year3: sd.charAt(13) as FourteenSegmentsAugment,
		year4: sd.charAt(14) as FourteenSegmentsAugment
	}

	return dateDataProps;
}

interface DateDataProps {
	day1: FourteenSegmentsAugment;
	day2: SixteenSegmentsAugment;
	day3: SixteenSegmentsAugment;
	dateLeft: FourteenSegmentsAugment;
	dateRight: FourteenSegmentsAugment;
	indexLeft: SixteenSegmentsAugment;
	indexRight: SixteenSegmentsAugment;
	month1: FourteenSegmentsAugment;
	month2: SixteenSegmentsAugment;
	month3: SixteenSegmentsAugment;
	year1: FourteenSegmentsAugment;
	year2: FourteenSegmentsAugment;
	year3: FourteenSegmentsAugment;
	year4: FourteenSegmentsAugment;
}

class DateController implements DateControllerInterface {
	//親コンポーネントから渡される関数にコールバックとして渡す。
	public update (): void {
		const obj = dateToObject(window.app.date);

		this.updateDay1(obj.day1);
		this.updateDay2(obj.day2);
		this.updateDay3(obj.day3);
		this.updateDateLeft(obj.dateLeft);
		this.updateDateRight(obj.dateRight);
		this.updateIndexLeft(obj.indexLeft);
		this.updateIndexRight(obj.indexRight);
		this.updateMonth1(obj.month1);
		this.updateMonth2(obj.month2);
		this.updateMonth3(obj.month3);
		this.updateYear1(obj.year1);
		this.updateYear2(obj.year2);
		this.updateYear3(obj.year3);
		this.updateYear4(obj.year4);
	}

	//各セグメント側で実装する
	public updateDay1 (aug: FourteenSegmentsAugment): void {}
	public updateDay2 (aug: SixteenSegmentsAugment): void {}
	public updateDay3 (aug: SixteenSegmentsAugment): void {}
	public updateDateLeft (aug: FourteenSegmentsAugment): void {}
    public updateDateRight (aug: FourteenSegmentsAugment): void {}
    public updateIndexLeft (aug: SixteenSegmentsAugment): void {}
    public updateIndexRight (aug: SixteenSegmentsAugment): void {}
    public updateMonth1 (aug: FourteenSegmentsAugment): void {}
    public updateMonth2 (aug: SixteenSegmentsAugment): void {}
    public updateMonth3 (aug: SixteenSegmentsAugment): void {}
    public updateYear1 (aug: FourteenSegmentsAugment): void {}
    public updateYear2 (aug: FourteenSegmentsAugment): void {}
    public updateYear3 (aug: FourteenSegmentsAugment): void {}
    public updateYear4 (aug: FourteenSegmentsAugment): void {}
}