import Cabinet from './Cabinet';
import Discipline from './Discipline';
import Teacher from './Teacher';

export default interface Lesson {
	id: number;
	oddDiscipline: Discipline;
	evenDiscipline: Discipline;

	firstOddCabinet: Cabinet;
	secondOddCabinet: Cabinet;
	firstEvenCabinet: Cabinet;
	secondEvenCabinet: Cabinet;

	firstOddTeacher: Teacher;
	secondOddTeacher: Teacher;
	firstEvenTeacher: Teacher;
	secondEvenTeacher: Teacher;
}
