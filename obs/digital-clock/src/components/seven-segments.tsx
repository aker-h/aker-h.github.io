import React, { useRef, RefObject } from 'react';

const SevenSegments = (props: SevenSegmentProps): JSX.Element => {
	const ref = useRef() as RefObject<HTMLDivElement>

	const update = (aug: SevenSegmentsAugment): void => {
		// console.log(aug);
		ref.current!.className = `seven-segments-outer on${aug}`;
	};

	switch (props.segmentType) {
		case 'hoursLeft': {
			props.timeController.updateHoursLeft = update;
			break;
		}
		case 'hoursRight': {
			props.timeController.updateHoursRight = update;
			break;
		}
		case 'minutesLeft': {
			props.timeController.updateMinutesLeft = update;
			break;
		}
		case 'minutesRight': {
			props.timeController.updateMinutesRight = update;
			break;
		}
		case 'secondsLeft': {
			props.timeController.updateSecondsLeft = update;
			break;
		}
		case 'secondsRight': {
			props.timeController.updateSecondsRight = update;
			break;
		}
	}

	return <div className={`seven-segments-outer on${props.on}`} ref={ref}>
		<HorizontalSegment name='a'/>
		<VerticalSegment name='b'/>
		<VerticalSegment name='c'/>
		<HorizontalSegment name='d'/>
		<VerticalSegment name='e'/>
		<VerticalSegment name='f'/>
		<CenterSegment name='g'/>
	</div>
};

export default SevenSegments;

interface SevenSegmentProps {
	on: SevenSegmentsAugment;
	segmentType: TimeKeys,
	timeController: TimeControllerInterface
}

const CenterSegment = (p: {name: string}) => { return <div className={`segment  ${p.name} center`}><div className='trapezoid upper'></div><div className='trapezoid lower'></div></div>};
const HorizontalSegment= (p: {name: string}) => { return <div className={`segment  ${p.name} horizontal`}><div className='trapezoid upper'></div><div className='trapezoid lower'></div></div>};
const VerticalSegment = (p: {name: string}) => { return <div className={`segment  ${p.name} vertical`}><div className='trapezoid left'></div><div className='trapezoid right'></div></div>};