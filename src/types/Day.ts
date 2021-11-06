import Lesson from './Lesson';

export default interface Day {
	id: number;
	name: string;
	lessons: Lesson[];
}
