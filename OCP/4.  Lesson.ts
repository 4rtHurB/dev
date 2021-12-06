
abstract class Lesson {
    tutor: Tutor;
    timeStart: moment.Moment;
    duration: number;
    student: Student;
    students?: Student[];

    constructor(props: LessonProps) {
        this.student = props.student;
        this.tutor = props.tutor;
        this.timeStart = props.timeStart;
        this.duration = props.duration;
    }

    public get timeStartFormatted(): string {
        return this.timeStart.toISOString();
    }
}
