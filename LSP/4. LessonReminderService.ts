
class LessonReminderService {
    private lessonService: LessonService;
    private notificationService: NotificationService;

    constructor() {
        this.lessonService = new LessonService();
        this.notificationService = new NotificationService();
    }

    async remindStudentsAboutCommingLessons() {
        const lessonsToRemind = await this.lessonService.getAllUpcomingLessons();
        for (const lesson of lessonsToRemind) {
            this.notificationService.sendNotification(
                new CommingLessonNotification(lesson, [lesson.student.email, lesson.tutor.email]) // Buh-Bah!
            );
        }
    }
}
