
class IndividualLessonBookingService implements BookingService<IndividualLesson> {
    // Others code here...

    public async rescheduleLesson(student: Student, lesson: IndividualLesson): Promise<IndividualLesson> {
        // Some code here...
    }

    public async confirmLesson(tutor: Tutor, lesson: IndividualLesson): Promise<IndividualLesson> {
        // Some code here...
    }

    public async crateLesson(lesson: IndividualLesson): Promise<IndividualLesson> {
        throw new Error('Not implemented');
    }
}
