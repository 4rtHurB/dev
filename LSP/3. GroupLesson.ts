
class GroupLesson extends Lesson {
    theme: string;
    maxStudents: number;
    students: Student[] = [];
    tags: string[] = [];

    constructor(props: GroupLessonProps) {
        super(props);
        this.theme = props.theme;
        this.maxStudents = props.maxStudents;
    }

    public get canAddStudent() {
        return this.students.length < this.maxStudents;
    }

    private isStudentAtLesson(student: Student) {
        return this.students.find((lessonStudent) => lessonStudent.email === student.email);
    }

    public addStudent(student: Student): void {
        if (!this.isStudentAtLesson(student)) {
            this.students.push(student);
        }
    }

    public removeStudent(student: Student): void {
        if (this.isStudentAtLesson(student)) {
            this.students = this.students.filter((lessonStudent) => lessonStudent.email !== student.email);
        }
    }
}

class GroupLessonBookingService implements BookingService<GroupLesson> {
    // All code here... 
}
