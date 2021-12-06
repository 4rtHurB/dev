interface BookingService<T extends Lesson> {
    bookLesson(student: Student, lesson: T): Promise<T>;
    cancelLesson(student: Student, lesson: T): Promise<T>;
}

interface GroupLessonBookingService extends BookingService<GroupLesson> {
    crateLesson(lesson: GroupLesson): Promise<GroupLesson>;
}

interface IndividualLessonBookingService extends BookingService<IndividualLesson> {
    rescheduleLesson(student: Student, lesson: IndividualLesson): Promise<IndividualLesson>;
    confirmLesson(tutor: Tutor, lesson: IndividualLesson): Promise<IndividualLesson>;
}

interface TrialLessonBookingService extends BookingService<TrialLesson> {
    
}