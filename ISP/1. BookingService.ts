
interface BookingService<T extends Lesson> {
    bookLesson(student: Student, lesson: T): Promise<T>;
    cancelLesson(student: Student, lesson: T): Promise<T>;
    crateLesson(lesson: T): Promise<T>;
    rescheduleLesson(student: Student, lesson: T): Promise<T>;
    confirmLesson(tutor: Tutor, lesson: T): Promise<T>;
}
