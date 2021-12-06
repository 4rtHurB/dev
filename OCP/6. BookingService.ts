
interface BookingService<T extends Lesson> {
    bookLesson(lesson: T, student: Student): Promise<T>;
    cancelLesson(lesson: T, student: Student): Promise<T>;
}
