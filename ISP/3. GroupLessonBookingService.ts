
class GroupLessonBookingService implements BookingService<GroupLesson> {
    // Others code here...

    public async crateLesson(lesson: GroupLesson) {
        // Some code here...
    }

    public async rescheduleLesson(student: Student, lesson: GroupLesson) {
        return lesson;
    }

    public async confirmLesson(tutor: Tutor, lesson: GroupLesson) {
        return lesson;
    }
}
