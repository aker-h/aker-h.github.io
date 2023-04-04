import React, { useRef, RefObject } from 'react';

const FourteenSegments = (props: FourteenSegmentProps): JSX.Element => {
	const ref = useRef() as RefObject<HTMLDivElement>

	const update = (aug: FourteenSegmentsAugment): void => {
		console.log(aug);
		ref.current!.className = `fourteen-segments-outer on${aug}`;
	};

	switch (props.segmentType) {
		case 'day1': {
			props.dateController.updateDay1 = update;
			break;
		}
		case 'dateLeft': {
			props.dateController.updateDateLeft = update;
			break;
		}
		case 'dateRight': {
			props.dateController.updateDateRight = update;
			break;
		}
		case 'month1': {
			props.dateController.updateMonth1 = update;
			break;
		}
		case 'year1': {
			props.dateController.updateYear1 = update;
			break;
		}
		case 'year2': {
			props.dateController.updateYear2 = update;
			break;
		}
		case 'year3': {
			props.dateController.updateYear3 = update;
			break;
		}
		case 'year4': {
			props.dateController.updateYear4 = update;
			break;
		}
	}

	return <div className={`fourteen-segments-outer on${props.on}`} ref={ref}>
		<HorizontalSegment name='a'/>
		<VerticalSegment name='b'/>
		<VerticalSegment name='c'/>
		<HorizontalSegment name='d'/>
		<VerticalSegment name='e'/>
		<VerticalSegment name='f'/>
		<CenterSegment name='g'/>
		<CenterSegment name='h'/>
		<DiagonalSegment name='i'/>
		<VerticalSegment_ name='j'/>
		<DiagonalSegment name='k'/>
		<DiagonalSegment name='l'/>
		<VerticalSegment_ name='m'/>
		<DiagonalSegment name='n'/>
	</div>
};

export default FourteenSegments;

interface FourteenSegmentProps {
	on: FourteenSegmentsAugment;
	segmentType: DateKeys,
	dateController: DateControllerInterface
}

const CenterSegment = (p: {name: string}) => { return <div className={`segment ${p.name} center`}><div className='trapezoid upper'></div><div className='trapezoid lower'></div></div>};
const DiagonalSegment = (p: {name: string}) => { return <div className={`segment ${p.name} diagonal`}><div className='trapezoid left'></div><div className='trapezoid right'></div></div>};
const HorizontalSegment= (p: {name: string}) => { return <div className={`segment ${p.name} horizontal`}><div className='trapezoid upper'></div><div className='trapezoid lower'></div></div>};
const VerticalSegment = (p: {name: string}) => { return <div className={`segment ${p.name} vertical`}><div className='trapezoid left'></div><div className='trapezoid right'></div></div>};
const VerticalSegment_ = (p: {name: string}) => { return <div className={`segment ${p.name} vertical_`}><div className='trapezoid left'></div><div className='trapezoid right'></div></div>};