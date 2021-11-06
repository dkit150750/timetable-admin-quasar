import Day from './Day';
import Lesson from './Lesson';

export default interface Group {
	id: number;
	name: string;
	slug: string;
	course: number;
	days: Day[];
	changes: Lesson[];
}
