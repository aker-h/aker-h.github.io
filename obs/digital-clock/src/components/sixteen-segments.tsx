import React, { useRef, RefObject } from 'react';

const SixteenSegments = (props: SixteenSegmentProps): JSX.Element => {
	const ref = useRef() as RefObject<HTMLDivElement>

	const update = (aug: SixteenSegmentsAugment): void => {
		console.log(aug);
		ref.current!.className = `sixteen-segments-outer on${aug}`;
	};

	switch (props.segmentType) {
		case 'day2': {
			props.dateController.updateDay2 = update;
			break;
		}
        case 'day3': {
			props.dateController.updateDay3 = update;
			break;
		}
        case 'indexLeft': {
			props.dateController.updateIndexLeft = update;
			break;
		}
		case 'indexRight': {
			props.dateController.updateIndexRight = update;
			break;
		}
		case 'month2': {
			props.dateController.updateMonth2 = update;
			break;
		}
		case 'month3': {
			props.dateController.updateMonth3 = update;
			break;
		}
	}

	return <div className={`sixteen-segments-outer on${props.on}`} ref={ref}>
        <HorizontalSegment name='a'/>
        <HorizontalSegment name='b'/>
        <VerticalSegment name='c'/>
        <VerticalSegment name='d'/>
        <HorizontalSegment name='e'/>
        <HorizontalSegment name='f'/>
        <VerticalSegment name='g'/>
        <VerticalSegment name='h'/>
        <CenterSegment name='i'/>
        <CenterSegment name='j'/>
        <DiagonalSegment name='k'/>
        <VerticalSegment name='l'/>
        <DiagonalSegment name='m'/>
        <DiagonalSegment name='n'/>
        <VerticalSegment name='o'/>
        <DiagonalSegment name='p'/>
	</div>
};

export default SixteenSegments;

interface SixteenSegmentProps {
	on: SixteenSegmentsAugment;
	segmentType: DateKeys,
	dateController: DateControllerInterface
}

const CenterSegment = (p: {name: string}) => { return <div className={`segment ${p.name} center`}><div className='trapezoid upper'></div><div className='trapezoid lower'></div></div>};
const DiagonalSegment = (p: {name: string}) => { return <div className={`segment ${p.name} diagonal`}><div className='trapezoid left'></div><div className='trapezoid right'></div></div>};
const HorizontalSegment= (p: {name: string}) => { return <div className={`segment ${p.name} horizontal`}><div className='trapezoid upper'></div><div className='trapezoid lower'></div></div>};
const VerticalSegment = (p: {name: string}) => { return <div className={`segment ${p.name} vertical`}><div className='trapezoid left'></div><div className='trapezoid right'></div></div>};