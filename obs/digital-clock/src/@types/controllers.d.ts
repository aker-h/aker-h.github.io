interface ClockControllerInterface {
    updateTime (): void;
    updateDate (): void;
}

interface TimeControllerInterface {
    updateHoursLeft (aug: SevenSegmentsAugment): void;
    updateHoursRight (aug: SevenSegmentsAugment): void;
    updateMinutesLeft (aug: SevenSegmentsAugment): void;
    updateMinutesRight (aug: SevenSegmentsAugment): void;
    updateSecondsLeft (aug: SevenSegmentsAugment): void;
    updateSecondsRight (aug: SevenSegmentsAugment): void;
}

interface DateControllerInterface {
    updateDay1 (aug: FourteenSegmentsAugment): void;
    updateDay2 (aug: SixteenSegmentsAugment): void;
    updateDay3 (aug: SixteenSegmentsAugment): void;
    updateDateLeft (aug: FourteenSegmentsAugment): void;
    updateDateRight (aug: FourteenSegmentsAugment): void;
    updateIndexLeft (aug: SixteenSegmentsAugment): void;
    updateIndexRight (aug: SixteenSegmentsAugment): void;
    updateMonth1 (aug: FourteenSegmentsAugment): void;
    updateMonth2 (aug: SixteenSegmentsAugment): void;
    updateMonth3 (aug: SixteenSegmentsAugment): void;
    updateYear1 (aug: FourteenSegmentsAugment): void;
    updateYear2 (aug: FourteenSegmentsAugment): void;
    updateYear3 (aug: FourteenSegmentsAugment): void;
    updateYear4 (aug: FourteenSegmentsAugment): void;
}